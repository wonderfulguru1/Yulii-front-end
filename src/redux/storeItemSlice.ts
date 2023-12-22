// UserSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { firestoreStorage } from "../firebase";
import { getDocs, collection, doc, getDoc, updateDoc, setDoc} from 'firebase/firestore';

interface StoreItem {
  category: any;
  id?: number;
  description: string;
  price: number;
  in_stock: number;
  title: string;
  status?: string
  rating: {
    count: number,
      rate: number
  };
  image: string;
  percentage_discount:number;
  merchant: {
    address: string
    name: string
    logo: string
    id:number
  }
  // other User properties
}

interface AddEditItemPayload {
  storeItem: StoreItem;
}

interface StoreItemState {
  data: StoreItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  selectedItems: StoreItem | null;
}

const initialState: StoreItemState = {
  data: [],
  status: 'idle',
  error: null,
  selectedItems: null,
};

export const fetchStoreItem = createAsyncThunk('storeItem/fetchStoreItem', async () => {
  const collectionRef = collection(firestoreStorage, 'storeItem');
  const snapshot = await getDocs(collectionRef);

  const data = snapshot.docs.map((doc) => ({ id: parseInt(doc.id), ...doc.data() } as StoreItem));

  return data;
});


export const fetchStoreItemById = createAsyncThunk('storeItem/fetchStoreItemById', async (storeItemId: string) => {
  const userDocRef = doc(firestoreStorage, 'storeItem', storeItemId);
  const userDocSnapshot = await getDoc(userDocRef);

  if (userDocSnapshot.exists()) {
    return { id: parseInt(userDocSnapshot.id), ...userDocSnapshot.data() } as StoreItem;
  } else {
    throw new Error('Item not found');
  }
});


export const addEditStoreItem = createAsyncThunk(
  'storeItem/addEditStoreItem',
  async ({ storeItem }: AddEditItemPayload) => {
    const timestampId = new Date().getTime(); // Generate a timestamp as a number

    if (storeItem.id) {
      const itemDocRef = doc(firestoreStorage, 'storeItem', storeItem.id.toString());
      await updateDoc(itemDocRef, { ...storeItem });
    } else {
      const collectionRef = collection(firestoreStorage, 'storeItem');

      await setDoc(doc(collectionRef, timestampId.toString()), {
        ...storeItem,
        id: timestampId,
      });
    }
  }
);

const storeItemSlice = createSlice({
  name: 'storeItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoreItem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStoreItem.fulfilled, (state, action: PayloadAction<StoreItem[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchStoreItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch User data';
      })
      .addCase(fetchStoreItemById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStoreItemById.fulfilled, (state, action: PayloadAction<StoreItem>) => {
        state.status = 'succeeded';
        state.selectedItems = action.payload;
      })
      .addCase(fetchStoreItemById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch user details';
      })
      .addCase(addEditStoreItem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addEditStoreItem.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(addEditStoreItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to add/edit store item';
      })
  },
});

export default storeItemSlice.reducer;

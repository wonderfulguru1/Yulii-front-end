// UserSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { firestoreStorage } from "../firebase";
import { getDocs, collection, doc, getDoc, addDoc, updateDoc, setDoc, Timestamp, serverTimestamp } from 'firebase/firestore';

interface StoreItem {
  category: any;
  name: string;
  id: string;
  description: string;
  status: string;
  price: string;
  title: string;
  rating: [];
  image: string
  merchant: {
    address: string
    name: string
    logo: string
  }
  // other User properties
}

interface AddEditItemPayload {
  storeItem: StoreItem;
}

interface UserState {
  data: StoreItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  selectedItems: StoreItem | null;
}

const initialState: UserState = {
  data: [],
  status: 'idle',
  error: null,
  selectedItems: null,
};

export const fetchStoreItem = createAsyncThunk('storeItem/fetchStoreItem', async () => {
  const collectionRef = collection(firestoreStorage, "storeItem");
  const snapshot = await getDocs(collectionRef);

  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as StoreItem));

  return data;
});


export const fetchStoreItemById = createAsyncThunk('storeItem/fetchStoreItemById', async (storeItemId: string) => {
  const userDocRef = doc(firestoreStorage, 'storeItem', storeItemId);
  const userDocSnapshot = await getDoc(userDocRef);

  if (userDocSnapshot.exists()) {
    return { id: userDocSnapshot.id, ...userDocSnapshot.data() } as StoreItem;
  } else {
    throw new Error('User not found');
  }
});


export const addEditStoreItem = createAsyncThunk(
  'storeItem/addEditStoreItem',
  async ({ storeItem }: AddEditItemPayload) => {
    let newStoreItemId;

    if (storeItem.id) {
      const itemDocRef = doc(firestoreStorage, 'storeItem', storeItem.id);
      await updateDoc(itemDocRef, { ...storeItem });
      newStoreItemId = storeItem.id;
    } else {
      const collectionRef = collection(firestoreStorage, 'storeItem');

      const timestampId = new Date().getTime().toString();

      const newItemRef = await addDoc(collectionRef, {
        ...storeItem,
        id: timestampId,
      });

      await setDoc(doc(collectionRef, timestampId), {
        ...storeItem,
        id: timestampId,
      });


      newStoreItemId = newItemRef.id;
      console.log('New item ID:', newStoreItemId);

      await updateDoc(newItemRef, { id: newStoreItemId, ...storeItem });
    }

    return { id: newStoreItemId, ...storeItem };
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

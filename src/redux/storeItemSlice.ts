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
  'storeItem/addEditMerchant',
  async ({ storeItem }: AddEditItemPayload) => {
  

    const myTimestampAsDate = Timestamp.now()
    console.log("jjjj", myTimestampAsDate)
    if (storeItem.id) {
 
      const itemDocRef = doc(firestoreStorage, 'storeItem', storeItem.id);
      await updateDoc(itemDocRef, { ...storeItem });
    } else {
      // If the item doesn't have an ID, it's an add
      const collectionRef = collection(firestoreStorage, 'storeItem');

      //       const newItemRef = await addDoc(collectionRef, {
      //   ...storeItem,
      //   id: myTimestampAsDate, 
      // });

      await addDoc(collectionRef, {
        ...storeItem,
        id: serverTimestamp(),
      });

      // await setDoc(doc(collectionRef, myTimestampAsDate), {
      //     ...storeItem,
      //     id: myTimestamserverTimestamp()pAsDate,
      //   });


      const newMerchantId = newItemRef.id;
      console.log('New item ID:', newMerchantId);
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

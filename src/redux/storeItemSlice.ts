// UserSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { firestoreStorage } from "../firebase";
import { getDocs, collection, doc, getDoc, updateDoc, setDoc, deleteDoc} from 'firebase/firestore';

interface StoreItem {
  category: any;
  id: number;
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
    id?:string
  }
  // other User properties
}

interface DeleteItemFulfilledAction {
  payload: string | void;
}

interface AddEditItemPayload {
  storeItem: any;
}

interface EditItemData {
  id: number;
  title: string;
  category:string;
  description:string;
  price:number
  // other properties
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

export const deleteItem = createAsyncThunk(
  'storeItem/deleteItem',
  async (itemId: number) => {
    const itemDocRef = doc(firestoreStorage, 'storeItem', itemId.toString());
    try {
      await deleteDoc(itemDocRef);
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  }
);

export const editItem = createAsyncThunk('storeItem/editItem', async (editData: EditItemData) => {
  const { id, title, price, description /* other properties */ } = editData;
  const storeItemRef = doc(firestoreStorage, 'storeItem', id.toString());

  await updateDoc(storeItemRef, {
    title, price, description 
  });
  const updatedSnapshot = await getDoc(storeItemRef);
  return { id, ...updatedSnapshot.data() } as StoreItem;
});


const storeItemSlice = createSlice({
  name: 'storeItems',
  initialState,
  reducers: {
   
  },
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
        state.error = action.error.message ?? 'Failed to add';
      })
      
      builder.addCase(deleteItem.fulfilled, (state, action: DeleteItemFulfilledAction) => {
        const itemIdToDelete = action.payload !== undefined ? Number(action.payload) || 0 : 0;
        const filteredData = state.data.filter((data) => data.id !== itemIdToDelete);
        state.data = filteredData;
      });
      builder.addCase(editItem.pending, (state) => {
        state.status = 'loading';
      });
      builder.addCase(editItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedItem = action.payload;
        state.data = state.data.map((item) =>
          item.id === updatedItem.id ? { ...item, ...updatedItem } : item
        );
      });
      builder.addCase(editItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? "Failed to edit";
        console.error('Edit item failed:', action.error.message);
      });
    
  },
});


export default storeItemSlice.reducer;

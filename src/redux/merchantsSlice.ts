// MerchantSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { auth, firestoreStorage } from "../firebase";
import { getDocs, collection, doc, getDoc, updateDoc, addDoc, setDoc} from "firebase/firestore";


interface MerchantItem {
    address: any;
    name: string;
    id: string;
    logo: string;
    phone: number;
    publish_token: string
    // other User properties
  }

  // interface Merchant {
  //   name: any;
  //   address: any;
  //   logo: any;
  //   id: string;
  // }
  
  interface AddMerchantItemPayload {
    item: MerchantItem;
  }
  
interface MerchantState {
  data: MerchantItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  selectedMerchant: MerchantItem | null;
}

const initialState: MerchantState = {
  data: [],
  status: 'idle',
  error: null,
  selectedMerchant: null,
};

export const fetchMerchants = createAsyncThunk('merchants/fetchMerchants', async () => {
  const collectionRef = collection(firestoreStorage, "merchants");
  const snapshot = await getDocs(collectionRef);

  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as MerchantItem));

  return data;
});


export const fetchMerchantById = createAsyncThunk('merchants/fetchMerchantById', async (merchantId: string) => {
  const userDocRef = doc(firestoreStorage, 'merchants', merchantId);
  const userDocSnapshot = await getDoc(userDocRef);

  if (userDocSnapshot.exists()) {
    return { id: userDocSnapshot.id, ...userDocSnapshot.data() } as MerchantItem;
  } else {
    throw new Error('Merchant not found');
  }
});

export const updateMerchant = createAsyncThunk('merchants/updateMerchant', async (updatedMerchant: MerchantItem) => {
  const { id, ...userData } = updatedMerchant;
  const userDocRef = doc(firestoreStorage, 'merchants', id);

  await updateDoc(userDocRef, userData);

  return updatedMerchant;
});

export const addEditMerchant = createAsyncThunk(
    'merchants/addEditMerchant',
    async ({ item }: AddMerchantItemPayload) => {
        const loggedInUserId = auth?.currentUser?.uid;
      if (item.id) {
   
        const itemDocRef = doc(firestoreStorage, 'merchants', item.id);
        await updateDoc(itemDocRef, { ...item });
      } else {
        // If the item doesn't have an ID, it's an add
        const collectionRef = collection(firestoreStorage, 'merchants');
  
              const newItemRef = await addDoc(collectionRef, {
          ...item,
          id: auth?.currentUser?.uid, 
        });

        await setDoc(doc(collectionRef, loggedInUserId), {
            ...item,
            id: loggedInUserId,
          });
  
 
        const newMerchantId = newItemRef.id;
        console.log('New item ID:', newMerchantId);
      }
    }
  );

  
const merchantsSlice = createSlice({
  name: 'merchants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMerchants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMerchants.fulfilled, (state, action: PayloadAction<MerchantItem[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMerchants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch Merchant data';
      })
      .addCase(fetchMerchantById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMerchantById.fulfilled, (state, action: PayloadAction<MerchantItem>) => {
        state.status = 'succeeded';
        state.selectedMerchant = action.payload;
      })
      .addCase(fetchMerchantById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch user details';
      })
      .addCase(addEditMerchant.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addEditMerchant.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(addEditMerchant.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to add/edit store item';
      })
  },
});

export default merchantsSlice.reducer;

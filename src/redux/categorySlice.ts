// CategorySlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { firestoreStorage } from "../firebase";
import { getDocs, collection} from "firebase/firestore";

interface Category {
  items: never[];
  isEmailVerified: boolean;
  id: string;
  firstname:string
}

interface CategoryState {
  data: Category[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CategoryState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const collectionRef = collection(firestoreStorage, "categories");
  const snapshot = await getDocs(collectionRef);

  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Category));

  return data;
});



const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch Category data';
      })
     
  },
});

export default categoriesSlice.reducer;

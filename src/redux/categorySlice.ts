// // categorySlice.ts
// import { firestoreStorage } from '@/firebase';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import { firestoreStorage } from '<your-firebase-config>'; // Import your Firebase configuration
// import { collection, getDocs } from 'firebase/firestore';

// // Async thunk to fetch categories
// export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
//   const querySnapshot = await getDocs(collection(firestoreStorage, 'categories'));
  
//   const categories = [];
//   querySnapshot.forEach((doc) => {
//     categories.push(doc.data());
//   });

//   return categories;
// });

// // Create a slice for categories
// const categorySlice = createSlice({
//   name: 'categories',
//   initialState: {
//     data: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCategories.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(fetchCategories.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const selectCategories = (state: { categories: { data: any; }; }) => state.categories.data;

// export default categorySlice.reducer;

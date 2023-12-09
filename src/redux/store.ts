// store.ts
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
// import categoriesReducer from './path-to-categorySlice/categorySlice';

const store = configureStore({
  reducer: {
    users: userSlice,
    // categories: categoriesReducer,
    // Add other reducers if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

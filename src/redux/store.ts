// store.ts
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './usersSlice';
import tasksSlice from './tasksSlice';
import storeItemSlice from './storeItemSlice';
import merchantsSlice from './merchantsSlice';
import categoriesSlice from './categorySlice';


const store = configureStore({
  reducer: {
    users: userSlice,
    tasks: tasksSlice,
    storeItems: storeItemSlice,
    merchants:merchantsSlice,
    categories: categoriesSlice,
    // categories: categorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

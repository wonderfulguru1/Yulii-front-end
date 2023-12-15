// UserSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { firestoreStorage } from "../firebase";
import { getDocs, collection, doc, getDoc, updateDoc} from "firebase/firestore";

interface User {
  isEmailVerified: boolean;
  id: string;
  firstname:string
  // other User properties
}

interface UserState {
  data: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  selectedUser: User | null;
}

const initialState: UserState = {
  data: [],
  status: 'idle',
  error: null,
  selectedUser: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const collectionRef = collection(firestoreStorage, "users");
  const snapshot = await getDocs(collectionRef);

  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as User));

  return data;
});


export const fetchUserById = createAsyncThunk('users/fetchUserById', async (userId: string) => {
  const userDocRef = doc(firestoreStorage, 'users', userId);
  const userDocSnapshot = await getDoc(userDocRef);

  if (userDocSnapshot.exists()) {
    return { id: userDocSnapshot.id, ...userDocSnapshot.data() } as User;
  } else {
    throw new Error('User not found');
  }
});

export const updateUser = createAsyncThunk('users/updateUser', async (updatedUser: User) => {
  const { id, ...userData } = updatedUser;
  const userDocRef = doc(firestoreStorage, 'users', id);

  await updateDoc(userDocRef, userData);

  return updatedUser;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch User data';
      })
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch user details';
      })
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';

        const updatedUser = action.payload;
        state.data = state.data.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
 
        if (state.selectedUser && state.selectedUser.id === updatedUser.id) {
          state.selectedUser = updatedUser;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to update user';
      });
  },
});

export default usersSlice.reducer;

// tasksSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { firestoreStorage } from '../firebase';
import { getDocs, collection, doc, getDoc, updateDoc } from 'firebase/firestore';

interface Task {
  name: string;
  id: string;
  description: string;
  status:string;
  // price:string;
  title:string;
  rating:[];
  image:string
  // Other Task properties

}

interface TasksState {
  data: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  selectedTask: Task | null;
}

const initialState: TasksState = {
  data: [],
  status: 'idle',
  error: null,
  selectedTask: null,
};

interface EditTaskParams {
  id: string;
  name?: string;
  image: string;
  description: string;
  status: string;
  // status:string;
// Assuming Task is your data type
}



export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const collectionRef = collection(firestoreStorage, 'tasks');
  const snapshot = await getDocs(collectionRef);

  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Task));

  return data;
});

export const fetchTaskById = createAsyncThunk('tasks/fetchTaskById', async (taskId: string) => {
  const taskDocRef = doc(firestoreStorage, 'tasks', taskId);
  const snapshot = await getDoc(taskDocRef);

  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() } as Task;
  } else {
    throw new Error('Task not found');
  }
});

export const editTask = createAsyncThunk('tasks/editItem', async (editData: EditTaskParams) => {
  const { id, description, name/* other properties */ } = editData;
  const taskItemRef = doc(firestoreStorage, 'tasks', id);

  await updateDoc(taskItemRef, {
    name,
    description 
  });
  const updatedSnapshot = await getDoc(taskItemRef);
  return { id, ...updatedSnapshot.data() } as EditTaskParams;
});


const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch Task data';
      })
      .addCase(fetchTaskById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTaskById.fulfilled, (state, action: PayloadAction<Task>) => {
        state.status = 'succeeded';
        state.selectedTask = action.payload;
      })
      .addCase(fetchTaskById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch task details';
      })
      .addCase(editTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editTask.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(editTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to add';
      })
  },
});

export default tasksSlice.reducer;

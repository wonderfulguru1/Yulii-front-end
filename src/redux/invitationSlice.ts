// tasksSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestoreStorage } from '../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';


interface Invitations {
    createdAt: null,
    receiver: null,
    sender: null,
    status: "Pending",
    external_invite: true,
    updatedAt: null,
}

interface InvitationsPayload {
    invitations: any;
}

interface StoreItemState {
    data: Invitations[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: StoreItemState = {
    data: [],
    status: 'idle',
    error: null,
};

export const invitationsData = createAsyncThunk(
    'createnewinvitation',
    async ({ invitations }: InvitationsPayload) => {
        invitations.createdAt = new Date().getTime();
        invitations.updatedAt = new Date().getTime();
      
        const collectionRef = collection(firestoreStorage, 'invitations');
        const res =  await setDoc(doc(collectionRef), {
            ...invitations,
        });
        console.log(res)
    }
);

const invitationSlice = createSlice({
    name: 'invitations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(invitationsData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(invitationsData.fulfilled, (state) => {
                state.status = 'succeeded';

            })
            .addCase(invitationsData.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

export default invitationSlice.reducer;

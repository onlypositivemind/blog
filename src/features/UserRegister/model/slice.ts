import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../api/registerUser';
import { RegisterSchema } from './types';

const initialState: RegisterSchema = {
    isLoading: false,
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.errorMessage = undefined;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isLoading = false;
                state.errorMessage = undefined;
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = payload;
            });
    },
});

export const { reducer: registerReducer } = registerSlice;

import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../api/loginUser';
import type { LoginSchema } from './types';

const initialState: LoginSchema = {
    isLoading: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.errorMessage = undefined;
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.isLoading = false;
                state.errorMessage = undefined;
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = payload as string;
            });
    },
});

export const { reducer: loginReducer } = loginSlice;

import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../services/loginUser';
import { LoginSchema } from '../types/loginSchema';

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
                state.errorMessage = payload;
            });
    },
});

export const { reducer: loginReducer } = loginSlice;

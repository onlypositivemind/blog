import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { LocalStorage } from '@/shared/consts';
import type { AuthResponse } from '@/shared/types';
import { checkUserAuth } from '../api/checkUserAuth';
import type { UserSchema } from './types';

const initialState: UserSchema = {
    _inited: true, // TODO Помнеять на false, когда будет готов сервер
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, { payload }: PayloadAction<AuthResponse>) => {
            localStorage.setItem(LocalStorage.ACCESS_TOKEN, payload.accessToken);
            state.authData = payload.user;
        },
        logout: (state) => {
            localStorage.removeItem(LocalStorage.ACCESS_TOKEN);
            state.authData = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkUserAuth.fulfilled, (state) => {
                state._inited = true;
            })
            .addCase(checkUserAuth.rejected, (state) => {
                state._inited = true;
                state.authData = undefined;
            });
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;

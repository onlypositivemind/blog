import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorage } from '@/shared/const';
import { AuthResponse } from '@/shared/types';
import { checkUserAuth } from '../services/checkUserAuth';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
    _inited: true, // TODO Помнеять на false, когда будет готов сервер
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, { payload }: PayloadAction<AuthResponse>) => {
            localStorage.setItem(LocalStorage.ACCESS_TOKEN, payload.accessToken);

            // @ts-ignore TODO убрать, когда будет готов сервер
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...authData } = payload.user;

            state.authData = authData;
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

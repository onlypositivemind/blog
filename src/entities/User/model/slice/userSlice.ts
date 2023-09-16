import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOKEN_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { AuthResponse } from '@/shared/types/auth';
import { checkUserAuth } from '../services/checkUserAuth';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
    _inited: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, { payload }: PayloadAction<AuthResponse>) => {
            localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, payload.accessToken);
            state.authData = payload.user;
        },

        logout: (state) => {
            localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);
            state.authData = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(checkUserAuth.fulfilled, (state) => {
            state._inited = true;
        });

        builder.addCase(checkUserAuth.rejected, (state) => {
            state._inited = true;
            state.authData = undefined;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

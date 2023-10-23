import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AUTH_ENDPOINT, TOKEN_LOCALSTORAGE_KEY } from '@/shared/const';
import { AuthResponse } from '@/shared/types';
import { userActions } from '../slice/userSlice';

export const checkUserAuth = createAsyncThunk<void, undefined>(
    'user/checkUserAuth',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.get<AuthResponse>('/refresh', {
                baseURL: AUTH_ENDPOINT,
                withCredentials: true,
            });

            if (!data) {
                throw new Error();
            }

            thunkApi.dispatch(userActions.setAuthData(data));
        } catch (err) {
            if (localStorage.getItem(TOKEN_LOCALSTORAGE_KEY)) {
                localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);
            }

            let errMessage = 'checkUserAuth error';

            if (axios.isAxiosError(err)) {
                errMessage = err.response?.data.message || errMessage;
            }

            return thunkApi.rejectWithValue(errMessage);
        }
    },
);

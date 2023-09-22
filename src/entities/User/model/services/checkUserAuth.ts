import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { AuthResponse } from '@/shared/types/auth';
import { userActions } from '../slice/userSlice';

export const checkUserAuth = createAsyncThunk<void, undefined>(
    'user/checkUserAuth',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.get<AuthResponse>(`${__API__}/refresh`, {
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

            if (axios.isAxiosError(err)) {
                const errMessage = err.response?.data.message;
                return thunkApi.rejectWithValue(errMessage);
            }

            return thunkApi.rejectWithValue('checkUserAuth error');
        }
    },
);

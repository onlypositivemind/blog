import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthResponse } from '@/shared/types/auth';
import { userActions } from '../slice/userSlice';

export const checkUserAuth = createAsyncThunk<void, undefined>(
    'user/checkUserAuth',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.get<AuthResponse>(`${__API__}/refresh`, {
                withCredentials: true,
            });

            thunkApi.dispatch(userActions.setAuthData(data));
        } catch (err) {
            /* empty */
        }
    },
);

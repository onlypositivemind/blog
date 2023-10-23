import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { AUTH_ENDPOINT } from '@/shared/const';
import { AuthResponse } from '@/shared/types';

export interface LoginUserProps {
    username: string;
    password: string;
}

export const loginUser = createAsyncThunk<AuthResponse, LoginUserProps, ThunkConfig<string>>(
    'login/loginUser',
    async (loginData, { dispatch, extra, rejectWithValue }) => {
        try {
            const { data } = await extra.api.post<AuthResponse>('/login', loginData, {
                baseURL: AUTH_ENDPOINT,
            });

            if (!data) {
                throw new Error();
            }

            dispatch(userActions.setAuthData(data));

            return data;
        } catch (err) {
            let errMessage = 'Log in failed';

            if (axios.isAxiosError(err)) {
                errMessage = err.response?.data.message || errMessage;
            }

            return rejectWithValue(errMessage);
        }
    },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { AUTH_ENDPOINT } from '@/shared/const';
import { AuthResponse } from '@/shared/types';

export interface RegisterUserProps {
    username: string;
    email: string;
    password: string;
}

export const registerUser = createAsyncThunk<AuthResponse, RegisterUserProps, ThunkConfig<string>>(
    'register/registerUser',
    async (registerData, { dispatch, extra, rejectWithValue }) => {
        try {
            const { data } = await extra.api.post<AuthResponse>('/registration', registerData, {
                baseURL: AUTH_ENDPOINT,
            });

            if (!data) {
                throw new Error();
            }

            dispatch(userActions.setAuthData(data));

            return data;
        } catch (err) {
            let errMessage = 'Register failed';

            if (axios.isAxiosError(err)) {
                errMessage = err.response?.data.message || errMessage;
            }

            return rejectWithValue(errMessage);
        }
    },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { AuthResponse } from '@/shared/types/auth';

interface RegisterUserProps {
    username: string;
    email: string;
    password: string;
}

export const registerUser = createAsyncThunk<AuthResponse, RegisterUserProps, ThunkConfig<string>>(
    'register/registerUser',
    async (registerData, { dispatch, extra, rejectWithValue }) => {
        try {
            const { data } = await extra.api.post<AuthResponse>('/registration', registerData);

            if (!data) {
                throw new Error();
            }

            dispatch(userActions.setAuthData(data));

            return data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const errMessage = err.response?.data.message;
                return rejectWithValue(errMessage);
            }

            return rejectWithValue('Failed register');
        }
    },
);

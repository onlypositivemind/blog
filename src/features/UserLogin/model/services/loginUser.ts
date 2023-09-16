import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { AuthResponse } from '@/shared/types/auth';

interface LoginUserProps {
    username: string;
    password: string;
}

export const loginUser = createAsyncThunk<AuthResponse, LoginUserProps, ThunkConfig<string>>(
    'login/loginUser',
    async (loginData, { dispatch, extra, rejectWithValue }) => {
        try {
            const { data } = await extra.api.post<AuthResponse>('/login', loginData);

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

            return rejectWithValue('Failed log in');
        }
    },
);

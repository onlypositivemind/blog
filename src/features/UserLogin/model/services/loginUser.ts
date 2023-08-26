import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { userActions } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { AuthResponse } from '@/shared/types/auth';

interface LoginUserProps {
    username: string;
    password: string;
}

export const loginUser = createAsyncThunk<AuthResponse, LoginUserProps, { rejectValue: string }>(
    'login/loginUser',
    async (loginData, thunkAPI) => {
        try {
            const { data } = await $api.post<AuthResponse>('/login', loginData);

            if (!data) {
                throw new Error();
            }

            thunkAPI.dispatch(userActions.setAuthData(data));

            return data;
        } catch (err) {
            if (err instanceof AxiosError) {
                const errMessage = JSON.parse(err.request.response).message;
                return thunkAPI.rejectWithValue(errMessage);
            }
            return thunkAPI.rejectWithValue('Failed user login');
        }
    },
);

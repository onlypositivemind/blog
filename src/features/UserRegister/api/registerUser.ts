import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { AUTH_ENDPOINT } from '@/shared/consts';
import { getErrorMessageAsyncThunk } from '@/shared/lib/utils';
import type { AuthResponse } from '@/shared/types';

interface RegisterUserParams {
    username: string;
    email: string;
    password: string;
}

const REGISTER_USER_ERROR_MESSAGE = 'RegisterUserServiceError';

const registerUser = createAsyncThunk<AuthResponse, RegisterUserParams, ThunkConfig<string>>(
    'register/registerUser',
    async (registerData, { dispatch, extra, rejectWithValue }) => {
        try {
            const { data } = await extra.api.post<AuthResponse>('/registration', registerData, {
                baseURL: AUTH_ENDPOINT,
            });

            dispatch(userActions.setAuthData(data));

            return data;
        } catch (err) {
            return rejectWithValue(getErrorMessageAsyncThunk(err, REGISTER_USER_ERROR_MESSAGE));
        }
    },
);

export { REGISTER_USER_ERROR_MESSAGE, registerUser };
export type { RegisterUserParams };

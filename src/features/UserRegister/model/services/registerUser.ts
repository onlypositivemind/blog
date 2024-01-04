import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { AUTH_ENDPOINT } from '@/shared/const';
import { getErrorMessageAsyncThunk } from '@/shared/lib/utils';
import { AuthResponse } from '@/shared/types';

interface RegisterUserProps {
    username: string;
    email: string;
    password: string;
}

const REGISTER_USER_ERROR_MESSAGE = 'RegisterUserServiceError';

const registerUser = createAsyncThunk<AuthResponse, RegisterUserProps, ThunkConfig<string>>(
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

export type { RegisterUserProps };
export { registerUser, REGISTER_USER_ERROR_MESSAGE };

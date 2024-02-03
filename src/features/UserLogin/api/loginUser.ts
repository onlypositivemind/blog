import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { AUTH_ENDPOINT } from '@/shared/consts';
import { getErrorMessageAsyncThunk } from '@/shared/lib/utils';
import type { AuthResponse } from '@/shared/types';

interface LoginUserProps {
    username: string;
    password: string;
}

const LOGIN_USER_ERROR_MESSAGE = 'LoginUserServiceError';

const loginUser = createAsyncThunk<AuthResponse, LoginUserProps, ThunkConfig<string>>(
    'login/loginUser',
    async (loginData, { dispatch, extra, rejectWithValue }) => {
        try {
            const { data } = await extra.api.post<AuthResponse>('/login', loginData, {
                baseURL: AUTH_ENDPOINT,
            });

            dispatch(userActions.setAuthData(data));

            return data;
        } catch (err) {
            return rejectWithValue(getErrorMessageAsyncThunk(err, LOGIN_USER_ERROR_MESSAGE));
        }
    },
);

export type { LoginUserProps };
export { loginUser, LOGIN_USER_ERROR_MESSAGE };

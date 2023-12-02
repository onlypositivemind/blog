import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AUTH_ENDPOINT, TOKEN_LOCALSTORAGE_KEY } from '@/shared/const';
import { getErrorMessageAsyncThunk } from '@/shared/lib/utils';
import { AuthResponse } from '@/shared/types';
import { userActions } from '../slice/userSlice';

const CHECK_USER_AUTH_ERROR_MESSAGE = 'CheckUserAuthServiceError';

const checkUserAuth = createAsyncThunk<void, undefined>(
    'user/checkUserAuth',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.get<AuthResponse>('/refresh', {
                baseURL: AUTH_ENDPOINT,
                withCredentials: true,
            });

            if (!data) {
                throw new Error();
            }

            dispatch(userActions.setAuthData(data));
        } catch (err) {
            if (localStorage.getItem(TOKEN_LOCALSTORAGE_KEY)) {
                localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);
            }

            return rejectWithValue(getErrorMessageAsyncThunk(err, CHECK_USER_AUTH_ERROR_MESSAGE));
        }
    },
);

export { checkUserAuth, CHECK_USER_AUTH_ERROR_MESSAGE };

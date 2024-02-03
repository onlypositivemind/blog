import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AUTH_ENDPOINT, LocalStorage } from '@/shared/consts';
import { getErrorMessageAsyncThunk } from '@/shared/lib/utils';
import type { AuthResponse } from '@/shared/types';
import { userActions } from '../model/slice';

const CHECK_USER_AUTH_ERROR_MESSAGE = 'CheckUserAuthServiceError';

const checkUserAuth = createAsyncThunk<void, undefined>(
    'user/checkUserAuth',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.get<AuthResponse>('/refresh', {
                baseURL: AUTH_ENDPOINT,
                withCredentials: true,
            });

            dispatch(userActions.setAuthData(data));
        } catch (err) {
            if (localStorage.getItem(LocalStorage.ACCESS_TOKEN)) {
                localStorage.removeItem(LocalStorage.ACCESS_TOKEN);
            }

            return rejectWithValue(getErrorMessageAsyncThunk(err, CHECK_USER_AUTH_ERROR_MESSAGE));
        }
    },
);

export { checkUserAuth, CHECK_USER_AUTH_ERROR_MESSAGE };

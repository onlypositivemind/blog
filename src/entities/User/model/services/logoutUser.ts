import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '@/shared/api/api';
import { userActions } from '../slice/userSlice';

export const logoutUser = createAsyncThunk<void, undefined>(
    'user/logoutUser',
    async (_, thunkApi) => {
        try {
            thunkApi.dispatch(userActions.logout());
            await $api.post('/logout');
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error(err);
        }
    },
);

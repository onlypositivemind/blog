import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { AUTH_ENDPOINT } from '@/shared/const/api';
import { userActions } from '../slice/userSlice';

export const logoutUser = createAsyncThunk<void, undefined, ThunkConfig<undefined>>(
    'user/logoutUser',
    async (_, { dispatch, extra }) => {
        try {
            dispatch(userActions.logout());
            await extra.api.post('/logout', undefined, {
                baseURL: AUTH_ENDPOINT,
            });
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error(err);
        }
    },
);

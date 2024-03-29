import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import { AUTH_ENDPOINT } from '@/shared/consts';
import { userActions } from '../model/slice';

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

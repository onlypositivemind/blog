import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import type { Profile } from '@/entities/Profile';
import { getErrorMessageAsyncThunk } from '@/shared/lib/utils';

const GET_PROFILE_ERROR_MESSAGE = 'GetProfileServiceError';

const getProfile = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'EditableProfileCard/getProfile',
    async (username, { extra, rejectWithValue }) => {
        try {
            // data массив из-за того, что получаю профиль через params - username
            const { data } = await extra.api.get<Profile>('/profile', {
                params: { username },
            });

            return Array.isArray(data) ? data[0] : data;
        } catch (err) {
            return rejectWithValue(getErrorMessageAsyncThunk(err, GET_PROFILE_ERROR_MESSAGE));
        }
    },
);

export { getProfile, GET_PROFILE_ERROR_MESSAGE };

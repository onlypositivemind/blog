import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { getErrorMessageAsyncThunk } from '@/shared/lib/utils';

const GET_PROFILE_ERROR_MESSAGE = 'GetProfileServiceError';

const getProfile = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'EditableProfileCard/getProfile',
    async (id, { extra, rejectWithValue }) => {
        try {
            const { data } = await extra.api.get<Profile>(`/profile/${id}`);

            return data;
        } catch (err) {
            return rejectWithValue(getErrorMessageAsyncThunk(err, GET_PROFILE_ERROR_MESSAGE));
        }
    },
);

export { getProfile, GET_PROFILE_ERROR_MESSAGE };

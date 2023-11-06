import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';

export const getProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'EditableProfileCard/getProfileData',
    async (id, { extra, rejectWithValue }) => {
        try {
            const { data } = await extra.api.get<Profile>(`/profile/${id}`);

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (err) {
            let errMessage = 'Failed to get profile data';

            if (axios.isAxiosError(err)) {
                errMessage = err.response?.data.message || errMessage;
            }
            return rejectWithValue(errMessage);
        }
    },
);

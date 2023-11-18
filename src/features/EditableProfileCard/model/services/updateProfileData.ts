import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { equals } from '@/shared/lib/utils';
import {
    selectProfileCardData,
    selectProfileCardFormData,
} from '../selectors/profileCardSelectors';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'editableProfileCard/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const profileData = selectProfileCardData(getState());
        const profileFormData = selectProfileCardFormData(getState());

        if (equals(profileData, profileFormData)) {
            return profileData!;
        }

        try {
            const { data } = await extra.api.put<Profile>(
                `/profile/${profileFormData?.id}`,
                profileFormData,
            );

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (err) {
            let errMessage = 'Failed to update profile data';

            if (axios.isAxiosError(err)) {
                errMessage = err.response?.data.message || errMessage;
            }
            return rejectWithValue(errMessage);
        }
    },
);

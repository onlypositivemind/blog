import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { equals, getErrorMessageAsyncThunk } from '@/shared/lib/utils';
import {
    selectEditableProfileCardData,
    selectEditableProfileCardFormData,
} from '../selectors/editableProfileCardSelectors';

const UPDATE_PROFILE_ERROR_MESSAGE = 'UpdateProfileServiceError';

const updateProfile = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'editableProfileCard/updateProfile',
    async (_, { extra, rejectWithValue, getState }) => {
        const profileData = selectEditableProfileCardData(getState());
        const profileFormData = selectEditableProfileCardFormData(getState());

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
            return rejectWithValue(getErrorMessageAsyncThunk(err, UPDATE_PROFILE_ERROR_MESSAGE));
        }
    },
);

export { updateProfile, UPDATE_PROFILE_ERROR_MESSAGE };

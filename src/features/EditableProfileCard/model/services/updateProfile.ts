import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { equals, getErrorMessageAsyncThunk } from '@/shared/lib/utils';
import {
    selectEditableProfileCardData,
    selectEditableProfileCardFormData,
} from '../selectors/editableProfileCardSelectors';
import { validateProfile } from '../services/validateProfile';
import { ValidateProfileErrors } from '../types/validateProfile';

const UPDATE_PROFILE_ERROR_MESSAGE = 'UpdateProfileServiceError';

const updateProfile = createAsyncThunk<Profile, void, ThunkConfig<string | ValidateProfileErrors>>(
    'editableProfileCard/updateProfile',
    async (_, { extra, rejectWithValue, getState }) => {
        const profileData = selectEditableProfileCardData(getState());
        const profileFormData = selectEditableProfileCardFormData(getState());

        if (equals(profileData, profileFormData)) {
            return profileData!;
        }

        const validationErrors = validateProfile(profileFormData!);
        if (validationErrors.length > 0) {
            return rejectWithValue(validationErrors);
        }

        try {
            const { data } = await extra.api.put<Profile>(
                `/profile/${profileFormData?.id}`,
                profileFormData,
            );

            return data;
        } catch (err) {
            return rejectWithValue(getErrorMessageAsyncThunk(err, UPDATE_PROFILE_ERROR_MESSAGE));
        }
    },
);

export { updateProfile, UPDATE_PROFILE_ERROR_MESSAGE };

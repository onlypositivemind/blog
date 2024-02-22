import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import type { Profile } from '@/entities/Profile';
import { validateProfile } from '@/features/EditableProfileCard/lib/validateProfile';
import type { ValidateProfileErrors } from '@/features/EditableProfileCard/model/types';
import { equals, getErrorMessageAsyncThunk } from '@/shared/lib/utils';
import {
    selectEditableProfileCardData,
    selectEditableProfileCardFormData,
} from '../model/selectors';

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

export { UPDATE_PROFILE_ERROR_MESSAGE, updateProfile };

import type { StateSchema } from '@/app/providers/StoreProvider';
import { profileMock } from '@/shared/lib/tests/mock';
import { ProfileValidationError } from '../../model/consts';
import {
    selectEditableProfileCardData,
    selectEditableProfileCardErrorMessage,
    selectEditableProfileCardFormData,
    selectEditableProfileCardIsLoading,
    selectEditableProfileCardIsNonExistentProfile,
    selectEditableProfileCardIsReadonly,
    selectEditableProfileCardValidationErrors,
} from '../../model/selectors';

export const errorMessage = 'Failed to get profile data';

describe('editableProfileCardSelectors', () => {
    test('selectEditableProfileCardIsLoading: should return true', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: { isLoading: true },
        };

        expect(selectEditableProfileCardIsLoading(state as StateSchema)).toBe(true);
    });

    test('selectEditableProfileCardIsLoading: should work with empty state', () => {
        expect(selectEditableProfileCardIsLoading({} as StateSchema)).toBe(undefined);
    });

    test('selectEditableProfileCardErrorMessage: should return error message', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: { errorMessage },
        };

        expect(selectEditableProfileCardErrorMessage(state as StateSchema)).toBe(errorMessage);
    });

    test('selectEditableProfileCardErrorMessage: should work with empty state', () => {
        expect(selectEditableProfileCardErrorMessage({} as StateSchema)).toBe(undefined);
    });

    test('selectEditableProfileCardIsReadonly: should return true', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: { isReadonly: true },
        };

        expect(selectEditableProfileCardIsReadonly(state as StateSchema)).toBe(true);
    });

    test('selectEditableProfileCardIsReadonly: should work with empty state', () => {
        expect(selectEditableProfileCardIsReadonly({} as StateSchema)).toBe(undefined);
    });

    test('selectEditableProfileCardData: should return mockProfileData', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: { data: profileMock },
        };

        expect(selectEditableProfileCardData(state as StateSchema)).toEqual(profileMock);
    });

    test('selectEditableProfileCardData: should work with empty state', () => {
        expect(selectEditableProfileCardData({} as StateSchema)).toBe(undefined);
    });

    test('selectEditableProfileCardFormData: should return profileCardFormData', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: { form: profileMock },
        };

        expect(selectEditableProfileCardFormData(state as StateSchema)).toEqual(profileMock);
    });

    test('selectEditableProfileCardFormData: should work with empty state', () => {
        expect(selectEditableProfileCardFormData({} as StateSchema)).toBe(undefined);
    });

    test('selectEditableProfileCardValidationErrors: should return validationErrors', () => {
        const validationErrors = [ProfileValidationError.EMAIL, ProfileValidationError.USERNAME];

        const state: DeepPartial<StateSchema> = {
            editableProfileCard: { validationErrors },
        };

        expect(selectEditableProfileCardValidationErrors(state as StateSchema)).toEqual(
            validationErrors,
        );
    });

    test('selectEditableProfileCardValidationErrors: should work with empty state', () => {
        expect(selectEditableProfileCardValidationErrors({} as StateSchema)).toBe(undefined);
    });

    test('selectEditableProfileCardIsNonExistentProfile: should return true', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: { isNonExistentProfile: true },
        };

        expect(selectEditableProfileCardIsNonExistentProfile(state as StateSchema)).toBe(true);
    });

    test('selectEditableProfileCardIsNonExistentProfile: should work with empty state', () => {
        expect(selectEditableProfileCardIsNonExistentProfile({} as StateSchema)).toBe(undefined);
    });
});

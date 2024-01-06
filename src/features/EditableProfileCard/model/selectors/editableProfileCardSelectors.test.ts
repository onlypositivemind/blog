import { StateSchema } from '@/app/providers/StoreProvider';
import { mockProfileData } from '@/shared/lib/tests/mock';
import { ProfileValidationError } from '../const/profileValidation';
import {
    selectEditableProfileCardData,
    selectEditableProfileCardErrorMessage,
    selectEditableProfileCardFormData,
    selectEditableProfileCardIsLoading,
    selectEditableProfileCardIsReadonly,
    selectEditableProfileCardValidationErrors,
} from './editableProfileCardSelectors';

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
            editableProfileCard: { data: mockProfileData },
        };

        expect(selectEditableProfileCardData(state as StateSchema)).toEqual(mockProfileData);
    });

    test('selectEditableProfileCardData: should work with empty state', () => {
        expect(selectEditableProfileCardData({} as StateSchema)).toBe(undefined);
    });

    test('selectEditableProfileCardFormData: should return profileCardFormData', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: { form: mockProfileData },
        };

        expect(selectEditableProfileCardFormData(state as StateSchema)).toEqual(mockProfileData);
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
});

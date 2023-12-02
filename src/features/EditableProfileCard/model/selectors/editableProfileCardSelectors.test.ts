import { StateSchema } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import {
    selectEditableProfileCardData,
    selectEditableProfileCardErrorMessage,
    selectEditableProfileCardFormData,
    selectEditableProfileCardIsLoading,
    selectEditableProfileCardIsReadonly,
} from './editableProfileCardSelectors';

export const profileCardData: Profile = {
    id: '1',
    email: 'admin@gmail.com',
    username: 'admin',
    firstname: 'Evgenii',
    lastname: 'TSovich',
    age: 24,
    currency: 'EUR',
    country: 'Russia',
    avatar: 'https://avatars.githubusercontent.com/u/109303573?v=4',
};

export const errorMessage = 'Failed to get profile data';

describe('Profile card selectors', () => {
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

    test('selectEditableProfileCardData: should return profileCardData', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: { data: profileCardData },
        };

        expect(selectEditableProfileCardData(state as StateSchema)).toEqual(profileCardData);
    });

    test('selectEditableProfileCardData: should work with empty state', () => {
        expect(selectEditableProfileCardData({} as StateSchema)).toBe(undefined);
    });

    test('selectEditableProfileCardFormData: should return profileCardFormData', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: { form: profileCardData },
        };

        expect(selectEditableProfileCardFormData(state as StateSchema)).toEqual(profileCardData);
    });

    test('selectEditableProfileCardFormData: should work with empty state', () => {
        expect(selectEditableProfileCardFormData({} as StateSchema)).toBe(undefined);
    });
});

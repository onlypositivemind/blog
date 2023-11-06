import { StateSchema } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import {
    selectProfileCardData,
    selectProfileCardErrorMessage,
    selectProfileCardFormData,
    selectProfileCardIsLoading,
    selectProfileCardIsReadonly,
} from './profileCardSelectors';

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
    test('selectProfileCardIsLoading: should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profileCard: { isLoading: true },
        };

        expect(selectProfileCardIsLoading(state as StateSchema)).toBe(true);
    });

    test('selectProfileCardIsLoading: should work with empty state', () => {
        expect(selectProfileCardIsLoading({} as StateSchema)).toBe(undefined);
    });

    test('selectProfileCardErrorMessage: should return error message', () => {
        const state: DeepPartial<StateSchema> = {
            profileCard: { errorMessage },
        };

        expect(selectProfileCardErrorMessage(state as StateSchema)).toBe(errorMessage);
    });

    test('selectProfileCardErrorMessage: should work with empty state', () => {
        expect(selectProfileCardErrorMessage({} as StateSchema)).toBe(undefined);
    });

    test('selectProfileCardIsReadonly: should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profileCard: { isReadonly: true },
        };

        expect(selectProfileCardIsReadonly(state as StateSchema)).toBe(true);
    });

    test('selectProfileCardIsReadonly: should work with empty state', () => {
        expect(selectProfileCardIsReadonly({} as StateSchema)).toBe(undefined);
    });

    test('selectProfileCardData: should return profileCardData', () => {
        const state: DeepPartial<StateSchema> = {
            profileCard: { data: profileCardData },
        };

        expect(selectProfileCardData(state as StateSchema)).toEqual(profileCardData);
    });

    test('selectProfileCardData: should work with empty state', () => {
        expect(selectProfileCardData({} as StateSchema)).toBe(undefined);
    });

    test('selectProfileCardFormData: should return profileCardFormData', () => {
        const state: DeepPartial<StateSchema> = {
            profileCard: { form: profileCardData },
        };

        expect(selectProfileCardFormData(state as StateSchema)).toEqual(profileCardData);
    });

    test('selectProfileCardFormData: should work with empty state', () => {
        expect(selectProfileCardFormData({} as StateSchema)).toBe(undefined);
    });
});

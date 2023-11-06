import { Profile } from '@/entities/Profile';
import { ProfileCardSchema } from '../types/profileCard';
import { profileCardReducer } from './profileCard';

export const profileData: Profile = {
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

describe('Profile slice', () => {
    test('getProfileData.pending', () => {
        const state: DeepPartial<ProfileCardSchema> = {
            isLoading: false,
            isReadonly: false,
            data: profileData,
            errorMessage,
        };

        expect(profileCardReducer(state as ProfileCardSchema, { type: '/pending' })).toEqual({
            isLoading: true,
            isReadonly: true,
            errorMessage: undefined,
            data: profileData,
        });
    });

    test('getProfileData.fulfilled', () => {
        const state: DeepPartial<ProfileCardSchema> = {
            isLoading: true,
            isReadonly: true,
            data: undefined,
            errorMessage,
        };

        expect(
            profileCardReducer(state as ProfileCardSchema, {
                type: '/fulfilled',
                payload: profileData,
            }),
        ).toEqual({
            isLoading: false,
            isReadonly: true,
            data: profileData,
            form: profileData,
            errorMessage: undefined,
        });
    });

    test('getProfileData.rejected', () => {
        const state: DeepPartial<ProfileCardSchema> = {
            isLoading: true,
            isReadonly: false,
            data: profileData,
            form: profileData,
            errorMessage: undefined,
        };

        expect(
            profileCardReducer(state as ProfileCardSchema, {
                type: '/rejected',
                payload: errorMessage,
            }),
        ).toEqual({
            isLoading: false,
            isReadonly: true,
            data: undefined,
            form: undefined,
            errorMessage,
        });
    });
});

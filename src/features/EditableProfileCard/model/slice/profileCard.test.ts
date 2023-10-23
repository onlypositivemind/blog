import { Profile } from '@/entities/Profile';
import { getProfileData } from '../services/getProfileData';
import { ProfileCardSchema } from '../types/profileCard';
import { profileCardReducer } from './profileCard';

export const profileData: Profile = {
    userId: 1,
    email: 'admin@gmail.com',
    username: 'admin',
    firstname: 'Evgenii',
    lastname: 'TSovich',
    age: 24,
    currency: 'EUR',
    country: 'Russia',
    city: 'Moscow',
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

        expect(profileCardReducer(state as ProfileCardSchema, getProfileData.pending)).toEqual({
            isLoading: true,
            isReadonly: true,
            errorMessage: undefined,
            data: undefined,
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
                type: getProfileData.fulfilled,
                payload: profileData,
            }),
        ).toEqual({
            isLoading: false,
            isReadonly: true,
            data: profileData,
            errorMessage: undefined,
        });
    });

    test('getProfileData.rejected', () => {
        const state: DeepPartial<ProfileCardSchema> = {
            isLoading: true,
            isReadonly: false,
            data: profileData,
        };

        expect(
            profileCardReducer(state as ProfileCardSchema, {
                type: getProfileData.rejected,
                payload: errorMessage,
            }),
        ).toEqual({
            isLoading: false,
            isReadonly: true,
            data: undefined,
            errorMessage,
        });
    });
});

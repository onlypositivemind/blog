import { Profile } from '@/entities/Profile';
import { getProfile } from '../services/getProfile';
import { updateProfile } from '../services/updateProfile';
import { EditableProfileCardSchema } from '../types/editableProfileCard';
import { editableProfileCardReducer } from './editableProfileCard';

const profileData: Profile = {
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

const errorMessage = 'errorMessage';

describe('editableProfileCard slice', () => {
    test('any action .pending)', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: false,
            isReadonly: false,
            data: profileData,
            errorMessage,
        };

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, { type: '/pending' }),
        ).toEqual({
            isLoading: true,
            isReadonly: true,
            errorMessage: undefined,
            data: profileData,
        });
    });

    test('any action .fulfilled)', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
            isReadonly: true,
            data: undefined,
            errorMessage,
        };

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, {
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

    test('getProfile.rejected', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
            isReadonly: false,
            data: profileData,
            form: profileData,
            errorMessage: undefined,
        };

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, {
                type: getProfile.rejected,
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

    test('updateProfile.rejected', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
            isReadonly: false,
            data: profileData,
            form: profileData,
            errorMessage: undefined,
        };

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, {
                type: updateProfile.rejected,
                payload: errorMessage,
            }),
        ).toEqual({
            ...state,
            isLoading: false,
            isReadonly: false,
            errorMessage,
        });
    });
});

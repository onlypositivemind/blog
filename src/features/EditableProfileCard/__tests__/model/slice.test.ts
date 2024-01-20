import { EditableProfileCardSchema } from '@/features/EditableProfileCard';
import { mockProfileData } from '@/shared/lib/tests/mock';
import { getProfile } from '../../api/getProfile';
import { updateProfile } from '../../api/updateProfile';
import { ProfileValidationError } from '../../model/consts';
import { editableProfileCardReducer } from '../../model/slice';

const errorMessage = 'errorMessage';

describe('editableProfileCardSlice', () => {
    test('any action .pending)', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: false,
            isReadonly: false,
            data: mockProfileData,
            errorMessage,
            validationErrors: [],
        };

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, { type: '/pending' }),
        ).toEqual({
            isLoading: true,
            isReadonly: true,
            errorMessage: undefined,
            validationErrors: undefined,
            data: mockProfileData,
        });
    });

    test('any action .fulfilled)', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
            isReadonly: true,
            data: undefined,
            validationErrors: [],
            errorMessage,
        };

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, {
                type: '/fulfilled',
                payload: mockProfileData,
            }),
        ).toEqual({
            isLoading: false,
            isReadonly: true,
            data: mockProfileData,
            form: mockProfileData,
            errorMessage: undefined,
            validationErrors: undefined,
        });
    });

    test('getProfile.rejected', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
            isReadonly: false,
            data: mockProfileData,
            form: mockProfileData,
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

    test('updateProfile.rejected with errorMessage', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
            isReadonly: false,
            data: mockProfileData,
            form: mockProfileData,
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

    test('updateProfile.rejected with validationErrors', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
            isReadonly: false,
            data: mockProfileData,
            form: mockProfileData,
            errorMessage: undefined,
            validationErrors: undefined,
        };

        const validationErrors = [ProfileValidationError.EMAIL, ProfileValidationError.USERNAME];

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, {
                type: updateProfile.rejected,
                payload: validationErrors,
            }),
        ).toEqual({
            ...state,
            isLoading: false,
            isReadonly: false,
            errorMessage: undefined,
            validationErrors,
        });
    });
});

import type { EditableProfileCardSchema } from '@/features/EditableProfileCard';
import { mockProfileData } from '@/shared/lib/tests/mock';
import { getProfile } from '../../api/getProfile';
import { updateProfile } from '../../api/updateProfile';
import { ProfileValidationError } from '../../model/consts';
import { editableProfileCardReducer } from '../../model/slice';

const errorMessage = 'errorMessage';

describe('editableProfileCardSlice', () => {
    test('isAnyOf(getProfile.pending, updateProfile.pending)', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: false,
            isReadonly: false,
            data: mockProfileData,
            errorMessage,
            validationErrors: [],
        };

        const result: EditableProfileCardSchema = {
            isLoading: true,
            isReadonly: true,
            errorMessage: undefined,
            validationErrors: undefined,
            data: mockProfileData,
        };

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, getProfile.pending),
        ).toEqual(result);

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, updateProfile.pending),
        ).toEqual(result);
    });

    test('isAnyOf(getProfile.fulfilled, updateProfile.fulfilled)', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
            isReadonly: true,
            data: undefined,
            validationErrors: [],
            errorMessage,
        };

        const result: EditableProfileCardSchema = {
            isLoading: false,
            isReadonly: true,
            data: mockProfileData,
            form: mockProfileData,
            errorMessage: undefined,
            validationErrors: undefined,
        };

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, {
                type: getProfile.fulfilled.type,
                payload: mockProfileData,
            }),
        ).toEqual(result);

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, {
                type: updateProfile.fulfilled.type,
                payload: mockProfileData,
            }),
        ).toEqual(result);
    });

    test('isAnyOf(getProfile.fulfilled, updateProfile.fulfilled) with a non-existent profile', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
            isReadonly: true,
            data: undefined,
            form: undefined,
            isNonExistentProfile: undefined,
            validationErrors: [],
            errorMessage,
        };

        const result: EditableProfileCardSchema = {
            isLoading: false,
            isReadonly: true,
            data: undefined,
            form: undefined,
            errorMessage: undefined,
            validationErrors: undefined,
            isNonExistentProfile: true,
        };

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, {
                type: getProfile.fulfilled.type,
                payload: undefined,
            }),
        ).toEqual(result);

        expect(
            editableProfileCardReducer(state as EditableProfileCardSchema, {
                type: updateProfile.fulfilled.type,
                payload: undefined,
            }),
        ).toEqual(result);
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

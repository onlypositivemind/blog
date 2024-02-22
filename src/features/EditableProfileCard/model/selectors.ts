import type { StateSchema } from '@/app/providers/StoreProvider';

const selectEditableProfileCardIsLoading = (state: StateSchema) =>
    state.editableProfileCard?.isLoading;

const selectEditableProfileCardErrorMessage = (state: StateSchema) =>
    state.editableProfileCard?.errorMessage;

const selectEditableProfileCardIsReadonly = (state: StateSchema) =>
    state.editableProfileCard?.isReadonly;

const selectEditableProfileCardData = (state: StateSchema) => state.editableProfileCard?.data;

const selectEditableProfileCardFormData = (state: StateSchema) => state.editableProfileCard?.form;

const selectEditableProfileCardValidationErrors = (state: StateSchema) =>
    state.editableProfileCard?.validationErrors;

const selectEditableProfileCardIsNonExistentProfile = (state: StateSchema) =>
    state.editableProfileCard?.isNonExistentProfile;

export {
    selectEditableProfileCardIsLoading,
    selectEditableProfileCardErrorMessage,
    selectEditableProfileCardIsReadonly,
    selectEditableProfileCardData,
    selectEditableProfileCardFormData,
    selectEditableProfileCardValidationErrors,
    selectEditableProfileCardIsNonExistentProfile,
};

import { StateSchema } from '@/app/providers/StoreProvider';

export const selectEditableProfileCardIsLoading = (state: StateSchema) =>
    state.editableProfileCard?.isLoading;
export const selectEditableProfileCardErrorMessage = (state: StateSchema) =>
    state.editableProfileCard?.errorMessage;
export const selectEditableProfileCardIsReadonly = (state: StateSchema) =>
    state.editableProfileCard?.isReadonly;
export const selectEditableProfileCardData = (state: StateSchema) =>
    state.editableProfileCard?.data;
export const selectEditableProfileCardFormData = (state: StateSchema) =>
    state.editableProfileCard?.form;
export const selectEditableProfileCardValidationErrors = (state: StateSchema) =>
    state.editableProfileCard?.validationErrors;

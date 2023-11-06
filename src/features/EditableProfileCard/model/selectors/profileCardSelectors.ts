import { StateSchema } from '@/app/providers/StoreProvider';

export const selectProfileCardIsLoading = (state: StateSchema) => state.profileCard?.isLoading;
export const selectProfileCardErrorMessage = (state: StateSchema) =>
    state.profileCard?.errorMessage;
export const selectProfileCardIsReadonly = (state: StateSchema) => state.profileCard?.isReadonly;
export const selectProfileCardData = (state: StateSchema) => state.profileCard?.data;
export const selectProfileCardFormData = (state: StateSchema) => state.profileCard?.form;

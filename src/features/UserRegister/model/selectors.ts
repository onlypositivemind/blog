import { StateSchema } from '@/app/providers/StoreProvider';

export const selectRegisterFormIsLoading = (state: StateSchema) => state.registerForm?.isLoading;
export const selectRegisterFormErrorMessage = (state: StateSchema) =>
    state.registerForm?.errorMessage;

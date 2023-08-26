import { StateSchema } from '@/app/providers/StoreProvider';

export const selectLoginFormIsLoading = (state: StateSchema) => state.loginForm?.isLoading;
export const selectLoginFormErrorMessage = (state: StateSchema) => state.loginForm?.errorMessage;

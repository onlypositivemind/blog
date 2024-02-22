import type { StateSchema } from '@/app/providers/StoreProvider';

const selectLoginFormIsLoading = (state: StateSchema) => state.loginForm?.isLoading;

const selectLoginFormErrorMessage = (state: StateSchema) => state.loginForm?.errorMessage;

export { selectLoginFormIsLoading, selectLoginFormErrorMessage };

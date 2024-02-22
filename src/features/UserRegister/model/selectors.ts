import type { StateSchema } from '@/app/providers/StoreProvider';

const selectRegisterFormIsLoading = (state: StateSchema) => state.registerForm?.isLoading;

const selectRegisterFormErrorMessage = (state: StateSchema) => state.registerForm?.errorMessage;

export { selectRegisterFormIsLoading, selectRegisterFormErrorMessage };

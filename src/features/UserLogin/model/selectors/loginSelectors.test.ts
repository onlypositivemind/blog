import { StateSchema } from '@/app/providers/StoreProvider';
import { selectLoginFormErrorMessage, selectLoginFormIsLoading } from './loginSelectors';

const errorMessage = 'Log in failed';

describe('loginSelectors', () => {
    test('selectLoginFormIsLoading: should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        };

        expect(selectLoginFormIsLoading(state as StateSchema)).toBe(true);
    });

    test('selectLoginFormIsLoading: should work with empty state', () => {
        expect(selectLoginFormIsLoading({} as StateSchema)).toBe(undefined);
    });

    test('selectLoginFormErrorMessage: should return error message', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { errorMessage },
        };

        expect(selectLoginFormErrorMessage(state as StateSchema)).toBe(errorMessage);
    });

    test('selectLoginFormIsLoading: should work with empty state', () => {
        expect(selectLoginFormErrorMessage({} as StateSchema)).toBe(undefined);
    });
});

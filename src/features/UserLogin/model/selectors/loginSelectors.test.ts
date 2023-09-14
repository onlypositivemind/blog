import { StateSchema } from '@/app/providers/StoreProvider';
import { selectLoginFormErrorMessage, selectLoginFormIsLoading } from './loginSelectors';

describe('Login selectors', () => {
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
            loginForm: { errorMessage: 'lorem lorem lorem' },
        };

        expect(selectLoginFormErrorMessage(state as StateSchema)).toBe('lorem lorem lorem');
    });
    
    test('selectLoginFormIsLoading: should work with empty state', () => {
        expect(selectLoginFormErrorMessage({} as StateSchema)).toBe(undefined);
    });
});

import { StateSchema } from '@/app/providers/StoreProvider';
import { selectRegisterFormErrorMessage, selectRegisterFormIsLoading } from './registerSelectors';

describe('Register selectors', () => {
    test('selectRegisterFormIsLoading: should return true', () => {
        const state: DeepPartial<StateSchema> = {
            registerForm: { isLoading: true },
        };

        expect(selectRegisterFormIsLoading(state as StateSchema)).toBe(true);
    });

    test('selectRegisterFormIsLoading: should work with empty state', () => {
        expect(selectRegisterFormIsLoading({} as StateSchema)).toBe(undefined);
    });

    test('selectRegisterFormErrorMessage: should return error message', () => {
        const state: DeepPartial<StateSchema> = {
            registerForm: { errorMessage: 'Register failed' },
        };

        expect(selectRegisterFormErrorMessage(state as StateSchema)).toBe('Register failed');
    });

    test('selectRegisterFormErrorMessage: should work with empty state', () => {
        expect(selectRegisterFormErrorMessage({} as StateSchema)).toBe(undefined);
    });
});

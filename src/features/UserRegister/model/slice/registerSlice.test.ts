import { registerUser } from '../services/registerUser';
import { RegisterSchema } from '../types/registerSchema';
import { registerReducer } from './registerSlice';

const errorMessage = 'errorMessage';

describe('Register slice', () => {
    test('registerUser.pending', () => {
        const state: DeepPartial<RegisterSchema> = {
            isLoading: false,
            errorMessage,
        };

        expect(registerReducer(state as RegisterSchema, registerUser.pending)).toEqual({
            isLoading: true,
            errorMessage: undefined,
        });
    });

    test('registerUser.fulfilled', () => {
        const state: DeepPartial<RegisterSchema> = {
            isLoading: true,
            errorMessage,
        };

        expect(registerReducer(state as RegisterSchema, registerUser.fulfilled)).toEqual({
            isLoading: false,
            errorMessage: undefined,
        });
    });

    test('registerUser.rejected', () => {
        const state: DeepPartial<RegisterSchema> = { isLoading: true };

        expect(
            registerReducer(state as RegisterSchema, {
                type: registerUser.rejected,
                payload: errorMessage,
            }),
        ).toEqual({
            isLoading: false,
            errorMessage,
        });
    });
});

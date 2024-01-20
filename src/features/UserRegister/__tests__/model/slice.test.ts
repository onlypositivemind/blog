import { registerUser } from '../../api/registerUser';
import { registerReducer } from '../../model/slice';
import { RegisterSchema } from '../../model/types';

const errorMessage = 'errorMessage';

describe('registerSlice', () => {
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

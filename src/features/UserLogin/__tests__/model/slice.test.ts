import { loginUser } from '../../api/loginUser';
import { loginReducer } from '../../model/slice';
import { LoginSchema } from '../../model/types';

const errorMessage = 'errorMessage';

describe('loginSlice', () => {
    test('loginUser.pending', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: false,
            errorMessage,
        };

        expect(loginReducer(state as LoginSchema, loginUser.pending)).toEqual({
            isLoading: true,
            errorMessage: undefined,
        });
    });

    test('loginUser.fulfilled', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: true,
            errorMessage,
        };

        expect(loginReducer(state as LoginSchema, loginUser.fulfilled)).toEqual({
            isLoading: false,
            errorMessage: undefined,
        });
    });

    test('loginUser.rejected', () => {
        const state: DeepPartial<LoginSchema> = { isLoading: true };

        expect(
            loginReducer(state as LoginSchema, {
                type: loginUser.rejected,
                payload: errorMessage,
            }),
        ).toEqual({
            isLoading: false,
            errorMessage,
        });
    });
});

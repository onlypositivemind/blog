import { mockUserAuthData } from '@/shared/lib/tests/mock';
import { checkUserAuth } from '../../api/checkUserAuth';
import { userActions, userReducer } from '../../model/slice';
import { UserSchema } from '../../model/types';

describe('userSlice', () => {
    test('userActions.logout', () => {
        const state: DeepPartial<UserSchema> = { _inited: true, authData: mockUserAuthData };

        expect(userReducer(state as UserSchema, userActions.logout)).toEqual({
            _inited: true,
            mockUserAuthData: undefined,
        });
    });

    test('userActions.setAuthData', () => {
        const state: DeepPartial<UserSchema> = { _inited: true };

        expect(
            userReducer(
                state as UserSchema,
                userActions.setAuthData({
                    accessToken: 'accessToken',
                    user: mockUserAuthData,
                }),
            ),
        ).toEqual({ _inited: true, authData: mockUserAuthData });
    });

    test('checkUserAuth.fulfilled', () => {
        const state: DeepPartial<UserSchema> = {
            _inited: false,
        };

        expect(userReducer(state as UserSchema, checkUserAuth.fulfilled)).toEqual({
            _inited: true,
        });
    });

    test('checkUserAuth.rejected', () => {
        const state: DeepPartial<UserSchema> = { _inited: false, authData: mockUserAuthData };

        expect(userReducer(state as UserSchema, checkUserAuth.rejected)).toEqual({
            _inited: true,
        });
    });
});

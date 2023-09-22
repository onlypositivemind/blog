import { checkUserAuth } from '../services/checkUserAuth';
import { User, UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

const authData: User = {
    id: '0',
    username: 'admin',
    email: 'admin@gmail.com',
    role: 'ADMIN',
};

describe('User slice', () => {
    test('logout action', () => {
        const state: DeepPartial<UserSchema> = {
            _inited: true,
            authData,
        };

        expect(userReducer(state as UserSchema, userActions.logout)).toEqual({
            _inited: true,
            authData: undefined,
        });
    });

    test('setAuthData action', () => {
        const state: DeepPartial<UserSchema> = {
            _inited: true,
        };

        expect(
            userReducer(
                state as UserSchema,
                userActions.setAuthData({
                    accessToken: 'accessToken',
                    user: authData,
                }),
            ),
        ).toEqual({
            _inited: true,
            authData,
        });
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
        const state: DeepPartial<UserSchema> = {
            _inited: false,
            authData,
        };

        expect(userReducer(state as UserSchema, checkUserAuth.rejected)).toEqual({
            _inited: true,
        });
    });
});

import { StateSchema } from '@/app/providers/StoreProvider';
import { User } from '../types/user';
import { selectUserAuthData, selectUserInited } from './userSelectors';

export const authData: User = {
    id: 1,
    username: 'admin',
    email: 'admin@gmail.com',
    roles: ['SystemAdmin'],
};

describe('User selectors', () => {
    test('selectUserInited: should return true', () => {
        const state: DeepPartial<StateSchema> = {
            user: { _inited: true },
        };

        expect(selectUserInited(state as StateSchema)).toBe(true);
    });

    test('selectUserInited: should work with empty state', () => {
        expect(selectUserInited({} as StateSchema)).toBe(undefined);
    });

    test('selectUserAuthData: should return error message', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData },
        };

        expect(selectUserAuthData(state as StateSchema)).toEqual(authData);
    });

    test('selectUserAuthData: should work with empty state', () => {
        expect(selectUserAuthData({} as StateSchema)).toBe(undefined);
    });
});

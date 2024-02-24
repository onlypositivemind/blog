import type { StateSchema } from '@/app/providers/StoreProvider';
import { userAuthDataMock } from '@/shared/lib/tests/mock';
import { selectUser, selectUserInited } from '../../model/selectors';

describe('userSelectors', () => {
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
            user: { authData: userAuthDataMock },
        };

        expect(selectUser(state as StateSchema)).toEqual(userAuthDataMock);
    });

    test('selectUserAuthData: should work with empty state', () => {
        expect(selectUser({} as StateSchema)).toBe(undefined);
    });
});

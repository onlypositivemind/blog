import { StateSchema } from '@/app/providers/StoreProvider';
import { mockUserAuthData } from '@/shared/lib/tests/mock';
import { selectUserAuthData, selectUserInited } from '../../model/selectors';

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
            user: { authData: mockUserAuthData },
        };

        expect(selectUserAuthData(state as StateSchema)).toEqual(mockUserAuthData);
    });

    test('selectUserAuthData: should work with empty state', () => {
        expect(selectUserAuthData({} as StateSchema)).toBe(undefined);
    });
});

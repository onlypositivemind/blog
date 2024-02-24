import type { StateSchema } from '@/app/providers/StoreProvider';
import { userAuthDataMock } from '@/shared/lib/tests/mock';
import { getBasicNavbarItems, getNavbarItemsForAuthUser } from '../../lib/getNavbarItems';
import { selectNavbarItems } from '../../model/selectors';

describe('navbarSelectors', () => {
    test('selectNavbarItems: should return basic nav items', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: undefined },
        };

        expect(selectNavbarItems(state as StateSchema)).toEqual(getBasicNavbarItems());
    });

    test('selectNavbarItems: should return basic and user nav items', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: userAuthDataMock },
        };

        expect(selectNavbarItems(state as StateSchema)).toEqual(
            getBasicNavbarItems().concat(getNavbarItemsForAuthUser(userAuthDataMock)),
        );
    });
});

import type { StateSchema } from '@/app/providers/StoreProvider';
import { getRouteProfile } from '@/shared/consts';
import { navbarItemsList, selectNavbarItems } from '../../model/selectors';
import ProfileIcon from '@/shared/assets/icons/profile.svg';

describe('navbarSelectors', () => {
    test('selectNavbarItems: should return shared items', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: undefined },
        };

        expect(selectNavbarItems(state as StateSchema)).toEqual(navbarItemsList);
    });

    test('selectNavbarItems: should return shared and user pages', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { username: 'admin' } },
        };

        expect(selectNavbarItems(state as StateSchema)).toEqual(
            navbarItemsList.concat({
                path: getRouteProfile('admin'),
                title: 'Profile',
                Icon: ProfileIcon,
                authOnly: true,
            }),
        );
    });
});

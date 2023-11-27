import { StateSchema } from '@/app/providers/StoreProvider';
import { getRouteAbout, getRouteHome, getRouteProfile } from '@/shared/const';
import { NavbarItemType } from '../types/navbar';
import { selectNavbarItems } from './navbarSelectors';
import AboutIcon from '@/shared/assets/icons/about.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';

const navbarItemsList: NavbarItemType[] = [
    { path: getRouteHome(), title: 'Home', Icon: HomeIcon },
    { path: getRouteAbout(), title: 'About', Icon: AboutIcon },
];

describe('Navbar selectors', () => {
    test('selectNavbarItems: should return shared items', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: undefined },
        };

        expect(selectNavbarItems(state as StateSchema)).toEqual(navbarItemsList);
    });

    test('selectNavbarItems: should return shared and user pages', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { id: 1 } },
        };

        expect(selectNavbarItems(state as StateSchema)).toEqual(
            navbarItemsList.concat({
                path: getRouteProfile(String(1)),
                title: 'Profile',
                Icon: ProfileIcon,
                authOnly: true,
            }),
        );
    });
});

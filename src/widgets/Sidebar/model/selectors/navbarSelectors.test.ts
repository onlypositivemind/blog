import { StateSchema } from '@/app/providers/StoreProvider';
import { getRouteAbout, getRouteHome, getRouteProfile } from '@/shared/const';
import { NavbarItemType } from '../types/navbar';
import { selectNavbarItems } from './navbarSelectors';
import AboutPageIcon from '@/shared/assets/icons/about-page.svg';
import MainPageIcon from '@/shared/assets/icons/main-page.svg';
import ProfilePageIcon from '@/shared/assets/icons/profile-page.svg';

const navbarItemsList: NavbarItemType[] = [
    { path: getRouteHome(), title: 'Home', Icon: MainPageIcon },
    { path: getRouteAbout(), title: 'About', Icon: AboutPageIcon },
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
                Icon: ProfilePageIcon,
                authOnly: true,
            }),
        );
    });
});

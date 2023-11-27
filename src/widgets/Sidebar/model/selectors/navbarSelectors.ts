import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from '@/entities/User';
import { getRouteAbout, getRouteHome, getRouteProfile } from '@/shared/const';
import { NavbarItemType } from '../types/navbar';
import AboutIcon from '@/shared/assets/icons/about.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';

export const selectNavbarItems = createSelector(selectUserAuthData, (userData) => {
    const navbarItemsList: NavbarItemType[] = [
        { path: getRouteHome(), title: 'Home', Icon: HomeIcon },
        { path: getRouteAbout(), title: 'About', Icon: AboutIcon },
    ];

    if (userData) {
        navbarItemsList.push({
            path: getRouteProfile(String(userData.id)),
            title: 'Profile',
            Icon: ProfileIcon,
            authOnly: true,
        });
    }

    return navbarItemsList;
});

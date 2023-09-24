import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from '@/entities/User';
import { getRouteAbout, getRouteMain, getRouteProfile } from '@/shared/const/router';
import { NavbarItemType } from '../types/navbar';
import AboutPageIcon from '@/shared/assets/icons/about-page.svg';
import MainPageIcon from '@/shared/assets/icons/main-page.svg';
import ProfilePageIcon from '@/shared/assets/icons/profile-page.svg';

export const selectNavbarItems = createSelector(selectUserAuthData, (userData) => {
    const navbarItemsList: NavbarItemType[] = [
        { path: getRouteMain(), title: 'Home', Icon: MainPageIcon },
        { path: getRouteAbout(), title: 'About', Icon: AboutPageIcon },
    ];

    if (userData) {
        navbarItemsList.push({
            path: getRouteProfile(userData.username),
            title: 'Profile',
            Icon: ProfilePageIcon,
            authOnly: true,
        });
    }

    return navbarItemsList;
});

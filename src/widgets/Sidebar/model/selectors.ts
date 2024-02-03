import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from '@/entities/User';
import { getRouteAbout, getRouteArticles, getRouteHome, getRouteProfile } from '@/shared/consts';
import type { NavbarItemType } from './types';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';

export const navbarItemsList: NavbarItemType[] = [
    { path: getRouteHome(), title: 'Home', Icon: HomeIcon },
    { path: getRouteAbout(), title: 'About', Icon: AboutIcon },
    { path: getRouteArticles(), title: 'Articles', Icon: ArticlesIcon },
];

export const selectNavbarItems = createSelector(selectUserAuthData, (userData) => {
    const result = [...navbarItemsList];

    if (userData) {
        result.push({
            path: getRouteProfile(String(userData.id)),
            title: 'Profile',
            Icon: ProfileIcon,
            authOnly: true,
        });
    }

    return result;
});

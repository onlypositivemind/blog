import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from '@/entities/User';
import { getRouteProfile } from '@/shared/consts';
import { NavbarItems } from './consts';
import ProfileIcon from '@/shared/assets/icons/profile.svg';

export const selectNavbarItems = createSelector(selectUserAuthData, (userData) => {
    const result = [...NavbarItems];

    if (userData) {
        result.push({
            path: getRouteProfile(userData.username),
            title: 'Profile',
            Icon: ProfileIcon,
            authOnly: true,
        });
    }

    return result;
});

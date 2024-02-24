import { createSelector } from '@reduxjs/toolkit';
import { selectUser } from '@/entities/User';
import { getBasicNavbarItems, getNavbarItemsForAuthUser } from '../lib/getNavbarItems';

export const selectNavbarItems = createSelector(selectUser, (userData) => {
    const basicNavbarItems = getBasicNavbarItems();

    return userData
        ? basicNavbarItems.concat(getNavbarItemsForAuthUser(userData))
        : basicNavbarItems;
});

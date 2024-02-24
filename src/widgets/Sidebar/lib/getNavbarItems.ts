import type { User } from '@/entities/User';
import { getRouteAbout, getRouteArticles, getRouteHome, getRouteProfile } from '@/shared/consts';
import type { NavbarItem } from '../model/types';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';

const getBasicNavbarItems = (): NavbarItem[] => [
    { path: getRouteHome(), title: 'Home', Icon: HomeIcon },
    { path: getRouteAbout(), title: 'About', Icon: AboutIcon },
    { path: getRouteArticles(), title: 'Articles', Icon: ArticlesIcon },
];

const getNavbarItemsForAuthUser = ({ username }: User): NavbarItem[] => [
    { path: getRouteProfile(username), title: 'Profile', Icon: ProfileIcon, authOnly: true },
];

export { getBasicNavbarItems, getNavbarItemsForAuthUser };

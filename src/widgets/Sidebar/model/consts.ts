import { getRouteAbout, getRouteArticles, getRouteHome } from '@/shared/consts';
import type { NavbarItem } from './types';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';

export const NavbarItems: NavbarItem[] = [
    { path: getRouteHome(), title: 'Home', Icon: HomeIcon },
    { path: getRouteAbout(), title: 'About', Icon: AboutIcon },
    { path: getRouteArticles(), title: 'Articles', Icon: ArticlesIcon },
];

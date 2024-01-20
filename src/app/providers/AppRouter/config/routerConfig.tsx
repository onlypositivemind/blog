import { AboutPage } from '@/pages/AboutPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import {
    getRouteAbout,
    getRouteArticle,
    getRouteArticles,
    getRouteHome,
    getRouteProfile,
} from '@/shared/consts';
import { AppRoutesProps } from '@/shared/types';

export const routerConfig: AppRoutesProps[] = [
    { path: getRouteHome(), element: <HomePage /> },
    { path: getRouteAbout(), element: <AboutPage /> },
    { path: getRouteArticles(), element: <ArticlesPage /> },
    { path: getRouteArticle(':id'), element: <ArticlePage /> },
    { path: getRouteProfile(':id'), element: <ProfilePage />, authOnly: true },
    { path: '*', element: <NotFoundPage /> },
];

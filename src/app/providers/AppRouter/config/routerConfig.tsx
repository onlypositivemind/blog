import { AboutPage } from '@/pages/AboutPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { getRouteAbout, getRouteArticles, getRouteHome, getRouteProfile } from '@/shared/const';
import { AppRoutesProps } from '@/shared/types';

export const routerConfig: AppRoutesProps[] = [
    { path: getRouteHome(), element: <HomePage /> },
    { path: getRouteAbout(), element: <AboutPage /> },
    { path: getRouteArticles(), element: <ArticlesPage /> },
    { path: getRouteProfile(':id'), element: <ProfilePage />, authOnly: true },
    { path: '*', element: <NotFoundPage /> },
];

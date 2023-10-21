import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { getRouteAbout, getRouteMain, getRouteProfile } from '@/shared/const';
import { AppRoutesProps } from '@/shared/types';

export const routerConfig: AppRoutesProps[] = [
    { path: getRouteMain(), element: <MainPage /> },
    { path: getRouteAbout(), element: <AboutPage /> },
    { path: getRouteProfile(':username'), element: <ProfilePage />, authOnly: true },
    { path: '*', element: <NotFoundPage /> },
];

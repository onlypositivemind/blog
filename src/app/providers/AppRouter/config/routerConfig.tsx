import { AppRoutesProps } from '@/shared/types/router';
import { getRouteAbout, getRouteMain } from '@/shared/const/router';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';

export const routerConfig: AppRoutesProps[] = [
    {
        path: getRouteMain(),
        element: <MainPage />,
    },
    {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
];

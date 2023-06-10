import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { getRouteAbout, getRouteMain } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

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

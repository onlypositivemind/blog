import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { AppRoutesProps } from '@/shared/types';
import { routerConfig } from '../config/routerConfig';
import { GuardedRoute } from './GuardedRoute';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <GuardedRoute>{element}</GuardedRoute> : element}
            />
        );
    }, []);

    return <Routes>{routerConfig.map(renderWithWrapper)}</Routes>;
};

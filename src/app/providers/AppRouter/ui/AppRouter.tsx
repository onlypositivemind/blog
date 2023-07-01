import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { routerConfig } from '../config/routerConfig';

const AppRouterComponent = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routerConfig.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export const AppRouter = memo(AppRouterComponent);

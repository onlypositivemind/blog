import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../config/routerConfig';

const AppRouterComponent = () => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Suspense fallback={<div>Loading...</div>}>
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

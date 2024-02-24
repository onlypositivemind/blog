import type { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectUser } from '@/entities/User';
import { getRouteHome } from '@/shared/consts';

interface GuardedRouteProps {
    children: ReactElement;
}

export const GuardedRoute = ({ children }: GuardedRouteProps) => {
    const location = useLocation();
    const user = useSelector(selectUser);

    if (!user) {
        return <Navigate to={getRouteHome()} state={{ from: location }} replace />;
    }

    return children;
};

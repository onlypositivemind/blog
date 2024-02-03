import type { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectUserAuthData } from '@/entities/User';
import { getRouteHome } from '@/shared/consts';

interface GuardedRouteProps {
    children: ReactElement;
}

export const GuardedRoute = ({ children }: GuardedRouteProps) => {
    const location = useLocation();
    const userData = useSelector(selectUserAuthData);

    if (!userData) {
        return <Navigate to={getRouteHome()} state={{ from: location }} replace />;
    }

    return children;
};

import type { RouteProps } from 'react-router-dom';

interface AppRoutesProps extends RouteProps {
    authOnly?: boolean;
}

export type { AppRoutesProps };

import { RouteProps } from 'react-router-dom';

export interface AppRoutesProps extends RouteProps {
    authOnly?: boolean;
}

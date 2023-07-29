import cn from 'classnames';
import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import s from './AppLink.module.scss';

type AppLinkTheme = 'white' | 'primary';

type AppLinkSize = 'size_h4' | 'size_p2';

interface AppLinkProps extends LinkProps {
    children: ReactNode;
    theme?: AppLinkTheme;
    size?: AppLinkSize;
    className?: string;
}

const AppLinkComponent = (props: AppLinkProps) => {
    const { children, to, className, theme = 'primary', size = 'size_h4', ...rest } = props;

    return (
        <Link to={to} className={cn(s.appLink, className, s[theme], s[size])} {...rest}>
            {children}
        </Link>
    );
};

export const AppLink = memo(AppLinkComponent);

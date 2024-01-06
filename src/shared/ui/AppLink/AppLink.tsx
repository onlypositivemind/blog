import cn from 'classnames';
import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import s from './AppLink.module.scss';

type AppLinkTheme = 'white' | 'primary';

type AppLinkSize = 'h4' | 'p2';

interface AppLinkProps extends LinkProps {
    children: ReactNode;
    theme?: AppLinkTheme;
    size?: AppLinkSize;
    className?: string;
}

const AppLinkComponent = ({
    children,
    to,
    className,
    theme = 'primary',
    size = 'h4',
    ...props
}: AppLinkProps) => (
    <Link to={to} className={cn(s.appLink, s[theme], s[`size_${size}`], className)} {...props}>
        {children}
    </Link>
);

export const AppLink = memo(AppLinkComponent);

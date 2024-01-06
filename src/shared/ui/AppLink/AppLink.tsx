import cn from 'classnames';
import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import s from './AppLink.module.scss';

type AppLinkTheme = 'white' | 'primary';

type AppLinkSize = 'm' | 'xl';

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
    size = 'xl',
    ...props
}: AppLinkProps) => (
    <Link to={to} className={cn(className, s.appLink, s[theme], s[`size_${size}`])} {...props}>
        {children}
    </Link>
);

export const AppLink = memo(AppLinkComponent);

import cn from 'classnames';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { getRouteHome } from '@/shared/const';
import LogoIcon from '@/shared/assets/icons/logo.svg';
import s from './Logo.module.scss';

type LogoTheme = 'primary' | 'white';

interface LogoProps {
    isLink?: boolean;
    theme?: LogoTheme;
    className?: string;
}

const LogoComponent = ({ className, theme = 'primary', isLink = true }: LogoProps) => {
    const classes = [className, s[theme]];
    const content = (
        <>
            <h2>Blog</h2>
            <LogoIcon />
        </>
    );

    if (isLink) {
        return (
            <Link to={getRouteHome()} className={cn(s.logoLink, ...classes)}>
                {content}
            </Link>
        );
    }

    return <div className={cn(s.logo, ...classes)}>{content}</div>;
};

export const Logo = memo(LogoComponent);

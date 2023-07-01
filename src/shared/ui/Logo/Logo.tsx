import cn from 'classnames';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { getRouteMain } from '@/shared/const/router';
import LogoIcon from '@/shared/assets/icons/logo.svg';
import s from './Logo.module.scss';

type LogoTheme = 'white';

interface LogoProps {
    theme?: LogoTheme;
    className?: string;
}

const LogoComponent = (props: LogoProps) => {
    const { className, theme = 'white' } = props;

    return (
        <Link to={getRouteMain()} className={cn(s.logo, className, s[theme])}>
            <h2>Blog</h2>
            <LogoIcon />
        </Link>
    );
};

export const Logo = memo(LogoComponent);

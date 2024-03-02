import cn from 'classnames';
import { memo } from 'react';
import { useTheme } from '@/shared/lib/hooks';
import { AppIcon, Button } from '@/shared/ui';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcherComponent = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const ThemeIcon = theme === 'light' ? MoonIcon : SunIcon;

    return (
        <Button
            size='xl'
            theme='clear_white'
            onClick={toggleTheme}
            aria-label='Switch theme'
            className={cn(s.toggleBtn, className)}
        >
            <AppIcon Icon={ThemeIcon} color='white' />
        </Button>
    );
};

export const ThemeSwitcher = memo(ThemeSwitcherComponent);

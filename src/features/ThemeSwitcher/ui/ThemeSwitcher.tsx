import { memo } from 'react';
import { useTheme } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcherComponent = ({ className }: ThemeSwitcherProps) => {
    const [theme, toggleTheme] = useTheme();
    const ThemeIcon = theme === 'light' ? SunIcon : MoonIcon;

    // TODO добавить стили, чтобы были базовые единые
    return (
        <Button onClick={toggleTheme} className={className} theme='clear'>
            <ThemeIcon />
        </Button>
    );
};

export const ThemeSwitcher = memo(ThemeSwitcherComponent);

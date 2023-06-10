import { memo } from 'react';
import s from './ThemeSwitcher.module.scss';
import cn from 'classnames';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import SunIcon from '@/shared/assets/icons/sun.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import { Button } from '@/shared/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcherComponent = (props: ThemeSwitcherProps) => {
    const { className } = props;
    const [theme, toggleTheme] = useTheme();

    const ThemeIcon = theme === 'light' ? SunIcon : MoonIcon;

    return (
        <Button
            onClick={toggleTheme}
            className={cn(s.themeBtn, className)}
            theme='clear'
        >
            <ThemeIcon className={s.icon} />
        </Button>
    );
};

export const ThemeSwitcher = memo(ThemeSwitcherComponent);

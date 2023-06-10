import cn from 'classnames';
import { memo } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button } from '@/shared/ui/Button';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';
import s from './ThemeSwitcher.module.scss';

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

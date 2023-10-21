import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const';
import { Theme } from '@/shared/types';
import { ThemeContext } from '../context/themeContext';

export const useTheme = (): [Theme, () => void] => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return [theme || 'light', toggleTheme];
};

import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../../const/localStorage';
import { Theme } from '../../types/theme';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return [theme || 'light', toggleTheme];
};

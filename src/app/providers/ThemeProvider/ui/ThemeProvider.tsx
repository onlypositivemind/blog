import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { LocalStorage } from '@/shared/consts';
import { ThemeContext } from '@/shared/lib/context/themeContext';
import { Theme } from '@/shared/types';

const defaultValue = (localStorage.getItem(LocalStorage.THEME) as Theme) || 'light';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultValue);

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => {
            const currentTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem(LocalStorage.THEME, currentTheme);
            return currentTheme;
        });
    }, []);

    const value = useMemo(
        () => ({
            theme,
            toggleTheme,
        }),
        [theme],
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

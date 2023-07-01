import { ReactNode, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { ThemeContext } from '@/shared/lib/context/themeContext';
import { Theme } from '@/shared/types/theme';

const defaultValue =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultValue);

    const value = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

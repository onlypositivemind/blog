import { createContext } from 'react';
import type { Theme } from '../../types/theme';

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleTheme: () => {},
});

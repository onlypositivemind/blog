import { createContext } from 'react';
import { Theme } from '../../types/theme';

interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (t: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

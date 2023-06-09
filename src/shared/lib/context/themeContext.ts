import { Theme } from '../../types/theme';
import { createContext } from 'react';

interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (t: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

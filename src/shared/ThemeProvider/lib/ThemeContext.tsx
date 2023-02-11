import { createContext } from 'react';

export const Theme = {
    LIGHT: 'light',
    DARK: 'dark',
} as const;

export type ThemeType = 'light' | 'dark'

export interface ThemeContextProps {
    theme?: ThemeType;
    setTheme?: (theme:ThemeType) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

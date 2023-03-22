import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext,
} from './ThemeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void
}

export const useTheme = ():UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme:Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.GREEN;
            break;
        case Theme.GREEN:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme ?? Theme.LIGHT,
        toggleTheme,
    };
};

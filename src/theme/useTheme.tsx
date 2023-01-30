import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void
}

const useTheme = ():UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);
    
    const toggleTheme = () => {
        const newTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    
    return {
        theme,
        toggleTheme,
    };
};

export default useTheme;
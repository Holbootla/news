import { useTheme } from '@/shared/ThemeProvider';
import { Theme } from '@/shared/ThemeProvider/lib/ThemeContext';
import LightThemeIcon from '@/shared/assets/icons/light-theme-icon.svg';
import DarkThemeIcon from '@/shared/assets/icons/dark-theme-icon.svg';
import { AppButton, AppButtonVariants } from '@/shared/ui';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <AppButton
            onClick={toggleTheme}
            variant={AppButtonVariants.SECONDARY}
        >
            {theme === Theme.DARK
                ? <LightThemeIcon width={40} height={40} />
                : <DarkThemeIcon width={40} height={40} />}
        </AppButton>
    );
};

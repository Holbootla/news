import { memo } from 'react';
import { useTheme } from '@/shared/ThemeProvider';
import { Theme } from '@/shared/ThemeProvider/lib/ThemeContext';
import LightThemeIcon from '@/shared/assets/icons/light-theme-icon.svg';
import DarkThemeIcon from '@/shared/assets/icons/dark-theme-icon.svg';
import { AppButton, AppButtonVariants } from '@/shared/ui';

export const ThemeSwitcher = memo(() => {
    const { theme, toggleTheme } = useTheme();
    const iconColor = theme === Theme.LIGHT ? '#000000' : '#ffffff';
    return (
        <AppButton
            onClick={toggleTheme}
            variant={AppButtonVariants.SECONDARY}
        >
            {theme === Theme.DARK
                ? <LightThemeIcon width={40} height={40} stroke={iconColor} fill={iconColor} />
                : <DarkThemeIcon width={40} height={40} stroke={iconColor} fill={iconColor} />}
        </AppButton>
    );
});

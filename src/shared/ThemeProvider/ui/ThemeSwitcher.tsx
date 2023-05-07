import { memo } from 'react';
import { useTheme } from '@/shared/ThemeProvider';
import { Theme } from '@/shared/ThemeProvider/lib/ThemeContext';
import LightThemeIcon from '@/shared/assets/icons/light-theme-icon.svg';
import DarkThemeIcon from '@/shared/assets/icons/dark-theme-icon.svg';
import GreenThemeIcon from '@/shared/assets/icons/green-theme-icon.svg';
import { AppButton, AppButtonVariants, Icon } from '@/shared/ui';

export const ThemeSwitcher = memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            onClick={toggleTheme}
            variant={AppButtonVariants.SECONDARY}
        >
            {theme === Theme.LIGHT && <Icon Svg={GreenThemeIcon} />}
            {theme === Theme.GREEN && <Icon Svg={DarkThemeIcon} />}
            {theme === Theme.DARK && <Icon Svg={LightThemeIcon} />}
        </AppButton>
    );
});

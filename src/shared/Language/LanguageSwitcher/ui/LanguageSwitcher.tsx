import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import LanguageIcon from '@/shared/assets/icons/language-icon.svg';
import { AppButton, AppButtonVariants } from '@/shared/ui';
import { useTheme } from '@/shared/ThemeProvider';
import { Theme } from '@/shared/ThemeProvider/lib/ThemeContext';

export const LanguageSwitcher = memo(() => {
    const { theme } = useTheme();
    const { i18n } = useTranslation();

    const iconColor = theme === Theme.LIGHT ? '#000000' : '#ffffff';

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        i18n.changeLanguage(currentLanguage === 'en' ? 'ru' : 'en').then((res) => res);
    };

    return (
        <AppButton
            onClick={toggleLanguage}
            variant={AppButtonVariants.SECONDARY}
        >
            <LanguageIcon width={40} height={40} stroke={iconColor} fill={iconColor} />
        </AppButton>
    );
});

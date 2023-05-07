import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import LanguageIcon from '@/shared/assets/icons/language-icon.svg';
import { AppButton, AppButtonVariants, Icon } from '@/shared/ui';

export const LanguageSwitcher = memo(() => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        i18n.changeLanguage(currentLanguage === 'en' ? 'ru' : 'en').then((res) => res);
    };

    return (
        <AppButton
            onClick={toggleLanguage}
            variant={AppButtonVariants.SECONDARY}
        >
            <Icon Svg={LanguageIcon} />
        </AppButton>
    );
});

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import classes from './Sidebar.module.scss';
import {
    AppButton, AppButtonVariants, AppLink, AppLinkVariants,
} from '@/shared/ui';
import { ThemeSwitcher, useTheme } from '@/shared/ThemeProvider';
import ArrowCloseIcon from '@/shared/assets/icons/arrow-previous-icon.svg';
import ArrowOpenIcon from '@/shared/assets/icons/arrow-next-icon.svg';
import { Theme } from '@/shared/ThemeProvider/lib/ThemeContext';
import { LanguageSwitcher } from '@/shared/Language';
import { routePaths } from '@/app/config/appRouter/routerConfig';

interface SidebarProps {
    className?:string;
}

export const Sidebar:FC<SidebarProps> = ({ className }) => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleIsOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const iconFillColor = theme === Theme.LIGHT ? '#000000' : '#ffffff';

    return (
        <div
            data-testid="sidebar"
            className={classNames(classes.Sidebar, { [classes.opened]: isOpen }, [className])}
        >
            <AppButton
                data-testid="toggleSidebarButton"
                onClick={toggleIsOpen}
                variant={AppButtonVariants.SECONDARY}
                wide
            >
                {
                    isOpen
                        ? <ArrowCloseIcon stroke={iconFillColor} width={40} height={40} />
                        : <ArrowOpenIcon stroke={iconFillColor} width={40} height={40} />
                }
            </AppButton>
            <div className={classes.links}>
                <AppLink to={routePaths.main} variant={AppLinkVariants.PRIMARY} outline>{t('mainPage')}</AppLink>
                <AppLink to={routePaths.about} variant={AppLinkVariants.SECONDARY} underline={false}>{t('aboutPage')}</AppLink>
            </div>
            <div className={classes.footer}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

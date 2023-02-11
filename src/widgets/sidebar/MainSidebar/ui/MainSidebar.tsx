import { FC, useState } from 'react';
import { classNames } from '@/shared/lib';
import classes from './MainSidebar.module.scss';
import { AppButton, AppButtonVariants } from '@/shared/ui';
import { ThemeSwitcher, useTheme } from '@/shared/ThemeProvider';
import ArrowCloseIcon from '@/shared/assets/icons/arrow-previous-icon.svg';
import ArrowOpenIcon from '@/shared/assets/icons/arrow-next-icon.svg';
import { Theme } from '@/shared/ThemeProvider/lib/ThemeContext';
import { LanguageSwitcher } from '@/shared/Language';

interface MainSidebarProps {
    className?:string;
}

export const MainSidebar:FC<MainSidebarProps> = ({ className, children }) => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleIsOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const iconFillColor = theme === Theme.LIGHT ? '#000000' : '#ffffff';

    return (
        <div className={classNames(classes.MainSidebar, { [classes.opened]: isOpen }, [className])}>
            <AppButton
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
            {children}
            <div className={classes.footer}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

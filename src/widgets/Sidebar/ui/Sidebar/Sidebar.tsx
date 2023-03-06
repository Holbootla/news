import { memo, useState } from 'react';
import { classNames } from '@/shared/lib';
import classes from './Sidebar.module.scss';
import { AppButton, AppButtonVariants } from '@/shared/ui';
import { ThemeSwitcher, useTheme } from '@/shared/ThemeProvider';
import ArrowCloseIcon from '@/shared/assets/icons/arrow-previous-icon.svg';
import ArrowOpenIcon from '@/shared/assets/icons/arrow-next-icon.svg';
import { Theme } from '@/shared/ThemeProvider/lib/ThemeContext';
import { LanguageSwitcher } from '@/shared/Language';
import { SidebarItemList } from '../../model/SidebarItemList';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?:string;
}

export const Sidebar = memo(({ className }:SidebarProps) => {
    const { theme } = useTheme();
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
                        ? <ArrowCloseIcon width={40} height={40} stroke={iconFillColor} fill={iconFillColor} />
                        : <ArrowOpenIcon width={40} height={40} stroke={iconFillColor} fill={iconFillColor} />
                }
            </AppButton>
            <div className={classes.links}>
                {SidebarItemList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        isOpen={isOpen}
                    />
                ))}
            </div>
            <div className={classes.footer}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
});

import { memo, useState } from 'react';
import { classNames } from '@/shared/lib';
import classes from './Sidebar.module.scss';
import { AppButton, AppButtonVariants, Icon } from '@/shared/ui';
import { ThemeSwitcher } from '@/shared/ThemeProvider';
import ArrowCloseIcon from '@/shared/assets/icons/arrow-previous-icon.svg';
import ArrowOpenIcon from '@/shared/assets/icons/arrow-next-icon.svg';
import { LanguageSwitcher } from '@/shared/Language';
import { SidebarItemList } from '../../model/SidebarItemList';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?:string;
}

export const Sidebar = memo(({ className }:SidebarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleIsOpen = () => {
        setIsOpen((prev) => !prev);
    };

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
                        ? <Icon Svg={ArrowCloseIcon} />
                        : <Icon Svg={ArrowOpenIcon} />
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

import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import classes from './Sidebar.module.scss';
import { AppButton, AppButtonVariants, Icon } from '@/shared/ui';
import { ThemeSwitcher } from '@/shared/ThemeProvider';
import ArrowCloseIcon from '@/shared/assets/icons/arrow-previous-icon.svg';
import ArrowOpenIcon from '@/shared/assets/icons/arrow-next-icon.svg';
import { LanguageSwitcher } from '@/shared/Language';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';

interface SidebarProps {
    className?:string;
}

export const Sidebar = memo(({ className }:SidebarProps) => {
    const sidebarItems = useSelector(getSidebarItems);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleIsOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <menu
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
                {sidebarItems.map((item) => (
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
        </menu>
    );
});

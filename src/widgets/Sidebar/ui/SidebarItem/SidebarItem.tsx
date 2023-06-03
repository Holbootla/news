import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './SidebarItem.module.scss';
import { AppLink, AppLinkVariants, Icon } from '@/shared/ui';
import { ISidebarItem } from '../../model/types/sidebar';

interface SidebarItemProps {
    item:ISidebarItem;
    isOpen?:boolean;
}

export const SidebarItem = memo(({
    item, isOpen = true,
}:SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            data-testid="SidebarItem"
            to={item.path}
            variant={AppLinkVariants.PRIMARY}
        >
            <Icon Svg={item.Icon} />
            <span className={classNames(classes['link-text'], { [classes.closed]: !isOpen }, [])}>{t(item.text)}</span>
        </AppLink>
    );
});

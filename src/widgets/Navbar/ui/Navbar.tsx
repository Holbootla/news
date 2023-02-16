import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkVariants } from '@/shared/ui';

interface NavbarProps {
    className?:string;
}

export const Navbar:FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div />
            <div className={classNames(classes.links, {}, [])}>
                <AppLink to="/" variant={AppLinkVariants.PRIMARY} outline>{t('mainPage')}</AppLink>
                <AppLink to="/about" variant={AppLinkVariants.SECONDARY} underline={false}>{t('aboutPage')}</AppLink>
            </div>
        </div>
    );
};

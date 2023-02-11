import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkVariants } from '@/shared/ui';

export const Navbar = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(classes.Navbar, {}, [])}>
            <div />
            <div className={classNames(classes.links, {}, [])}>
                <AppLink to="/" variant={AppLinkVariants.PRIMARY} outline>{t('mainPage')}</AppLink>
                <AppLink to="/about" variant={AppLinkVariants.SECONDARY} underline={false}>{t('aboutPage')}</AppLink>
            </div>
        </div>
    );
};

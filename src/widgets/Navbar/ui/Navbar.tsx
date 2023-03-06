import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames, useAppDispatch } from '@/shared/lib';
import classes from './Navbar.module.scss';
import { AppButton } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData, userActions } from '@/entities/User';

interface NavbarProps {
    className?:string;
}

export const Navbar = memo(({ className }:NavbarProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);

    const [isLoginModal, setIsLoginModal] = useState<boolean>(false);

    const openLoginModal = useCallback(() => {
        setIsLoginModal(true);
    }, []);

    const closeLoginModal = useCallback(() => {
        setIsLoginModal(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.deleteAuthData());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(classes.Navbar, {}, [className])}>
                <div />
                <AppButton onClick={onLogout}>{t('logOut')}</AppButton>
            </div>
        );
    }

    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div />
            <AppButton onClick={openLoginModal}>{t('signIn')}</AppButton>
            <LoginModal isOpen={isLoginModal} onClose={closeLoginModal} />
        </div>
    );
});

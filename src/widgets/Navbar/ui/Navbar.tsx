import {
    FC, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import classes from './Navbar.module.scss';
import { AppButton } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData, userActions } from '@/entities/User';

interface NavbarProps {
    className?:string;
}

export const Navbar:FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

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

    useEffect(() => {
        setIsLoginModal(false);
    }, [authData]);

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
};

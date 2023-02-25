import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import classes from './Navbar.module.scss';
import { AppButton } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUserName';

interface NavbarProps {
    className?:string;
}

export const Navbar:FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isLoginModal, setIsLoginModal] = useState<boolean>(false);

    const openLoginModal = () => {
        setIsLoginModal(true);
    };

    const closeLoginModal = () => {
        setIsLoginModal(false);
    };

    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div />
            <AppButton onClick={openLoginModal}>{t('signIn')}</AppButton>
            <LoginModal isOpen={isLoginModal} onClose={closeLoginModal} />
        </div>
    );
};

import { FC, Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { AsyncLoginForm } from '../LoginForm/LoginForm.async';
import { AppSpinner } from '@/shared/ui';

interface LoginModalProps {
    isOpen:boolean;
    onClose:()=>void;
}

export const LoginModal:FC<LoginModalProps> = ({ isOpen, onClose }) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<AppSpinner />}>
            <AsyncLoginForm />
        </Suspense>
    </Modal>
);

import { memo, Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { AsyncLoginForm } from '../LoginForm/LoginForm.async';
import { AppSpinner } from '@/shared/ui';

interface LoginModalProps {
    isOpen:boolean;
    onClose:()=>void;
}

export const LoginModal = memo(({ isOpen, onClose }:LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<AppSpinner />}>
            <AsyncLoginForm onSuccess={onClose} />
        </Suspense>
    </Modal>
));

import {
    FC, MouseEvent, ReactNode,
} from 'react';
import { classNames } from '@/shared/lib';
import classes from './Modal.module.scss';
import { Portal } from '@/shared/ui/Portal/Portal';

interface ModalProps {
    className?:string;
    children:ReactNode;
    isOpen:boolean;
    onClose:()=>void;
}

export const Modal:FC<ModalProps> = ({
    className, children, isOpen, onClose,
}) => {
    const onBodyClick = (e:MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div
                className={classNames(classes.Modal, { [classes.opened]: isOpen }, [className])}
            >
                <div
                    className={classNames(classes.overlay, {}, [className])}
                    onClick={onClose}
                >
                    <div
                        className={classNames(classes.body, {}, [className])}
                        onClick={onBodyClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

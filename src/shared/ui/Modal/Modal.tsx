import {
    FC, MouseEvent, ReactNode, useEffect, useState,
} from 'react';
import { classNames } from '@/shared/lib';
import classes from './Modal.module.scss';
import { Portal } from '@/shared/ui/Portal/Portal';

interface ModalProps {
    className?:string;
    children:ReactNode;
    isOpen:boolean;
    onClose:()=>void;
    lazy?:boolean;
}

export const Modal:FC<ModalProps> = ({
    className, children, isOpen, onClose, lazy,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const onBodyClick = (e:MouseEvent) => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(classes.Modal, { [classes.opened]: isOpen }, [className])}
            >
                <div
                    className={classes.overlay}
                    onClick={onClose}
                >
                    <div
                        className={classes.body}
                        onClick={onBodyClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

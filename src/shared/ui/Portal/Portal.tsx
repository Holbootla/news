import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

interface PortalProps {
    children: ReactNode;
    container?: HTMLElement;
}

export const Portal = (props:PortalProps) => {
    const {
        children,
        container = document.body.querySelector('.App'),
    } = props;
    return container ? createPortal(children, container) : null;
};

import { ReactNode, useRef } from 'react';
import { classNames } from '@/shared/lib';
import classes from './AppPage.module.scss';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';

interface AppPageProps {
    className?:string;
    children?:ReactNode;
    onScrollEnd?: () => void;
}

export const AppPage = ({ className, children, onScrollEnd }:AppPageProps) => {
    const wrapperRef = useRef();
    const triggerRef = useRef();

    useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEnd });

    return (
        <section
            ref={wrapperRef}
            data-testid="AppPage"
            className={classNames(classes.AppPage, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
};

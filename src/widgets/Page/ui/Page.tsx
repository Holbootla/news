import { MutableRefObject, ReactNode, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames, useAppDispatch } from '@/shared/lib';
import classes from './Page.module.scss';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { getScrollByPage, pageActions } from '@/widgets/Page';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';

interface PageProps {
    className?:string;
    children?:ReactNode;
    onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }:PageProps) => {
    const { pathname } = useLocation();

    const dispatch = useAppDispatch();

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEnd });

    const scroll = useSelector((state:StateSchema) => getScrollByPage(state, pathname));

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scroll;
    });

    const onScroll = useThrottle(() => {
        dispatch(pageActions.setScroll({ page: pathname, scroll: wrapperRef.current.scrollTop }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            data-testid="Page"
            className={classNames(classes.Page, {}, [className])}
            onScroll={onScroll}
        >
            <div className={classNames(classes.content, {}, [])}>
                {children}
                {onScrollEnd && <div className={classes.trigger} ref={triggerRef} />}
            </div>
        </section>
    );
};

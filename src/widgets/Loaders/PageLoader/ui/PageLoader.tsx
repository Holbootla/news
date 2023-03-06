import { memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './PageLoader.module.scss';
import { AppSpinner } from '@/shared/ui/';

interface PageLoaderProps {
    className?:string;
}

export const PageLoader = memo(({ className }:PageLoaderProps) => (
    <div className={classNames(classes.PageLoader, {}, [className])}>
        <AppSpinner />
    </div>
));

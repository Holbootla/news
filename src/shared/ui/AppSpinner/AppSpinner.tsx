import { memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './AppSpinner.module.scss';

interface AppSpinnerProps {
    className?:string;
}

export const AppSpinner = memo(({ className }:AppSpinnerProps) => (
    <div className={classNames(classes.AppSpinner, {}, [className])} />
));

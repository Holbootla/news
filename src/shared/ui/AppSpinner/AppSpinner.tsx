import { FC } from 'react';
import { classNames } from '@/shared/lib';
import classes from './AppSpinner.module.scss';

interface AppSpinnerProps {
    className?:string;
}

export const AppSpinner:FC<AppSpinnerProps> = ({ className }) => (
    <div className={classNames(classes.AppSpinner, {}, [className])} />
);

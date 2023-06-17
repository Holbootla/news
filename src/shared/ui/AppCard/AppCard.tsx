import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib';
import classes from './AppCard.module.scss';

interface AppCardProps extends HTMLAttributes<HTMLDivElement>{
    className?:string;
    children?:ReactNode;
}

export const AppCard = ({ className, children, ...attributes }:AppCardProps) => (
    <div
        data-testid="AppCard"
        className={classNames(classes.AppCard, {}, [className])}
        {...attributes}
    >
        {children}
    </div>
);

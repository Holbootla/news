import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib';
import classes from './AppLink.module.scss';

export enum AppLinkVariants {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?:string;
    outline?:boolean;
    underline?:boolean;
    variant?: 'primary' | 'secondary';
    children?:ReactNode;
}

export const AppLink = memo(({
    to, className, outline = false, underline = true, variant = AppLinkVariants.PRIMARY, children,
}:AppLinkProps) => (
    <Link
        to={to}
        className={classNames(
            classes.AppLink,
            { [classes[variant]]: true, [classes.outline]: outline, [classes.underline]: underline },
            [className],
        )}
    >
        {children}
    </Link>
));

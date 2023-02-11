import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib';
import classes from './AppLink.module.scss';

export const AppLinkVariants = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
} as const;

interface AppLinkProps extends LinkProps {
    className?:string;
    outline?:boolean;
    underline?:boolean;
    variant?: 'primary' | 'secondary';
}

export const AppLink:FC<AppLinkProps> = ({
    to, className, outline = false, underline = true, variant = AppLinkVariants.PRIMARY, children,
}) => (
    <Link
        to={to}
        className={classNames(
            classes.appLink,
            { [classes[variant]]: true, [classes.outline]: outline, [classes.underline]: underline },
            [className],
        )}
    >
        {children}
    </Link>
);

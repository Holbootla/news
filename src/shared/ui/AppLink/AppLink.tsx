import { FC } from "react";
import { classNames } from "@/shared/lib";
import classes from './AppLink.module.scss'
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkVariants {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    outline?:boolean;
    underline?:boolean;
    variant?:AppLinkVariants;
}

export const AppLink:FC<AppLinkProps> = ({to, outline = false, underline = true, variant = AppLinkVariants.PRIMARY, children}) => {
    return (
        <Link
            to={to}
            className={classNames(classes.appLink, {[classes[variant]]:true, [classes.outline]:outline, [classes.underline]:underline}, [])}
        >
            {children}
        </Link>
    );
};
import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "@/shared/lib";
import classes from './AppButton.module.scss'

export enum AppButtonVariants {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string;
    variant?:AppButtonVariants;
}

export const AppButton:FC<AppButtonProps> = ({className, variant = AppButtonVariants.PRIMARY, children, ...props}) => {
    return (
        <button
            className={classNames(classes.appButton, {[classes[variant]]:true}, [className])}
            {...props}
        >
            {children}
        </button>
    );
};
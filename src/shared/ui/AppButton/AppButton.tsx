import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@/shared/lib';
import classes from './AppButton.module.scss';

export enum AppButtonVariants {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string;
    variant?: 'primary' | 'secondary';
    wide?:boolean;
}

export const AppButton:FC<AppButtonProps> = ({
    className, variant = AppButtonVariants.PRIMARY,
    wide,
    disabled,
    children,
    ...props
}) => (
    <button
        data-testid="appButton"
        type="button"
        className={classNames(
            classes.AppButton,
            {
                [classes[variant]]: true,
                [classes.wide]: wide,
                [classes.disabled]: disabled,
            },
            [className],
        )}
        disabled={disabled}
        {...props}
    >
        {children}
    </button>
);

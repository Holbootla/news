import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@/shared/lib';
import classes from './AppButton.module.scss';

export const AppButtonVariants = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
} as const;

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string;
    variant?: 'primary' | 'secondary';
    wide?:boolean;
}

export const AppButton:FC<AppButtonProps> = ({
    className, variant = AppButtonVariants.PRIMARY,
    wide,
    children,
    ...props
}) => (
    <button
        type="button"
        className={classNames(
            classes.appButton,
            { [classes[variant]]: true, [classes.wide]: wide },
            [className],
        )}
        {...props}
    >
        {children}
    </button>
);

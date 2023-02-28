import { FC } from 'react';
import { classNames } from '@/shared/lib';
import classes from './AppText.module.scss';

export enum AppTextVariants {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    CRITICAL = 'critical',
}

interface AppTextProps {
    className?:string;
    variant?:AppTextVariants;
    title?:string;
    text?:string;
}

export const AppText:FC<AppTextProps> = ({
    className, variant = AppTextVariants.PRIMARY, title, text,
}) => (
    <div
        data-testid="AppText"
        className={classNames(classes.AppText, { [classes[variant]]: true }, [className])}
    >
        {title && <h5 className={classes.title}>{title}</h5>}
        {text && <p className={classes.text}>{text}</p>}
    </div>
);

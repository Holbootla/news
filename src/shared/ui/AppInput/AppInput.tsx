import {
    ChangeEvent, InputHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames } from '@/shared/lib';
import classes from './AppInput.module.scss';

export enum AppInputVariants {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface AppInputProps extends HTMLInputProps {
    className?:string;
    variant?: 'primary' | 'secondary';
    wide?:boolean;
    value?:string;
    onChange?:(value:string)=>void;
    children?:ReactNode;
}

export const AppInput = memo(({
    className,
    variant = AppInputVariants.PRIMARY,
    wide,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...props
}:AppInputProps) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className={classes['input-wrapper']}>
            {placeholder && <p>{placeholder}</p>}
            <input
                data-testid="appInput"
                className={classNames(
                    classes.AppInput,
                    { [classes[variant]]: true, [classes.wide]: wide },
                    [className],
                )}
                value={value}
                onChange={onChangeHandler}
                type={type}
                autoFocus={autoFocus}
                {...props}
            />
        </div>
    );
});

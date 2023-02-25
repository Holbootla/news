import {
    ChangeEvent, FC, InputHTMLAttributes, useEffect, useRef, useState,
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
    value:string;
    onChange:(value:string)=>void;
}

export const AppInput:FC<AppInputProps> = ({
    className,
    variant = AppInputVariants.PRIMARY,
    wide,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...props
}) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current.focus();
        }
    }, [autoFocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={classes['input-wrapper']}>
            {placeholder && <p>{placeholder}</p>}
            <input
                ref={inputRef}
                data-testid="appInput"
                className={classNames(
                    classes.AppInput,
                    { [classes[variant]]: true, [classes.wide]: wide },
                    [className],
                )}
                value={value}
                onChange={onChangeHandler}
                type={type}
                autoFocus={isFocused}
                onBlur={onBlur}
                {...props}
            />
        </div>

    );
};

import {
    ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import { classNames } from '@/shared/lib';
import classes from './AppSelect.module.scss';

export enum AppSelectVariants {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface AppSelectOption {
    label: string;
    value: string;
}

interface AppSelectProps {
    className?:string;
    label?:string;
    options:Array<AppSelectOption>;
    value?:string;
    onChange?:(value:string)=>void;
    readonly?:boolean;
    testId?:string;
}

export const AppSelect = memo(({
    className, label, options, value, onChange, readonly, testId = 'AppSelect',
}:AppSelectProps) => {
    const onChangeHandler = useCallback((e:ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    }, [onChange]);

    const optionList = useMemo(() => options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
    )), [options]);

    return (
        <div
            data-testid={testId}
            className={classNames(classes.AppSelect, {}, [className])}
        >
            {label && (
                <p>{label}</p>
            )}
            <select
                className={classes.select}
                value={value ?? ''}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
});

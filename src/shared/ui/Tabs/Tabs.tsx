import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib';
import classes from './Tabs.module.scss';

export type Tab = {
    value: string,
    label: string | ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: Tab[];
    value: string;
    onChange: (value:string)=>void;
}

export const Tabs = memo(({
    className, tabs, value, onChange,
}: TabsProps) => {
    const onClick = useCallback((tabValue:string) => () => {
        onChange(tabValue);
    }, [onChange]);

    return (
        <div
            data-testid="Tabs"
            className={classNames(classes.Tabs, {}, [className])}
        >
            {tabs.map((tab) => (
                <div
                    key={tab.value}
                    onClick={onClick(tab.value)}
                    className={classNames(classes.tab, { [classes.active]: tab.value === value }, [])}
                >
                    {tab.label}
                </div>
            ))}
        </div>
    );
});

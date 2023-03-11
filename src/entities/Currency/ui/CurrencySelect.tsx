import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { AppSelect } from '@/shared/ui/AppSelect/AppSelect';
import { Currency } from '../model/types/Currency';

interface CurrencyProps {
    className?:string;
    value?:Currency;
    onChange?:(value:Currency)=>void;
    readonly?:boolean;
}

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}:CurrencyProps) => {
    const { t } = useTranslation('currency');

    const currencyOptions = useMemo(() => Object.entries(Currency)
        .map(([currKey, currLabel]) => (
            { label: t(currLabel), value: currKey }
        )), [t]);

    return (
        <AppSelect
            testId="CurrencySelect"
            className={classNames(undefined, {}, [className])}
            label={(t('currency'))}
            options={currencyOptions}
            value={value}
            onChange={onChange}
            readonly={readonly}
        />
    );
});

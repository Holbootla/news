import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { AppSelect } from '@/shared/ui/AppSelect/AppSelect';
import { Country } from '../model/types/Country';

interface CountryProps {
    className?:string;
    value?:Country;
    onChange?:(value:Country)=>void;
    readonly?:boolean;
}

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}:CountryProps) => {
    const { t } = useTranslation('country');

    const countryOptions = useMemo(() => Object.entries(Country)
        .map(([countryKey, countryLabel]) => (
            { label: t(countryLabel), value: countryKey }
        )), [t]);

    return (
        <AppSelect
            testId="CountrySelect"
            className={classNames(undefined, {}, [className])}
            label={(t('country'))}
            options={countryOptions}
            value={value}
            onChange={onChange}
            readonly={readonly}
        />
    );
});

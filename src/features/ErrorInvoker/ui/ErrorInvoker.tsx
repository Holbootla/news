import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@/shared/ui';
import { classNames } from '@/shared/lib';

interface ErrorInvokerProps {
    className?:string;
}

export const ErrorInvoker = memo(({ className }:ErrorInvokerProps) => {
    const { t } = useTranslation();

    const [isError, setIsError] = useState<boolean>();

    const invokeError = () => {
        setIsError(true);
    };

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    return (
        <AppButton
            className={classNames(undefined, {}, [className])}
            variant="primary"
            onClick={invokeError}
        >
            {t('invokeError')}
        </AppButton>
    );
});

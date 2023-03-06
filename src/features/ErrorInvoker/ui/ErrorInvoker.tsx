import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { AppButton } from '@/shared/ui';

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
            className={classNames(null, {}, [className])}
            variant="primary"
            onClick={invokeError}
        >
            {t('invokeError')}
        </AppButton>
    );
});

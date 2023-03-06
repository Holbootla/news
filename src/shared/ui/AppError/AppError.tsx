import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './AppError.module.scss';

interface AppErrorProps {
    className?:string;
}

export const AppError = memo(({ className }:AppErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(classes.AppError, {}, [className])}>
            {t('errorMessage')}
            <button type="button" onClick={reloadPage}>{t('reloadPage')}</button>
        </div>
    );
});

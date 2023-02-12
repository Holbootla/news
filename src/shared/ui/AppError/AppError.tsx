import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import classes from './AppError.module.scss';

interface AppErrorProps {
    className?:string;
}

export const AppError:FC<AppErrorProps> = ({ className }) => {
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
};

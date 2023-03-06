import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?:string;
}

const NotFoundPage = memo(({ className }:NotFoundPageProps) => {
    const { t } = useTranslation('notFoundPage');

    return (
        <div className={classNames(classes.NotFoundPage, {}, [className])}>
            {t('pageNotFound')}
        </div>
    );
});

export default NotFoundPage;

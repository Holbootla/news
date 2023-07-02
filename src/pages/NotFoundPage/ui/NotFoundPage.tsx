import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './NotFoundPage.module.scss';
import { AppPage } from '@/shared/ui';

interface NotFoundPageProps {
    className?:string;
}

const NotFoundPage = memo(({ className }:NotFoundPageProps) => {
    const { t } = useTranslation('notFoundPage');

    return (
        <AppPage className={classNames(classes.NotFoundPage, {}, [className])}>
            {t('pageNotFound')}
        </AppPage>
    );
});

export default NotFoundPage;

import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './NotFoundPage.module.scss';
import { Page } from '@/widgets/Page';

interface NotFoundPageProps {
    className?:string;
}

const NotFoundPage = memo(({ className }:NotFoundPageProps) => {
    const { t } = useTranslation('notFoundPage');

    return (
        <Page className={classNames(classes.NotFoundPage, {}, [className])}>
            {t('pageNotFound')}
        </Page>
    );
});

export default NotFoundPage;

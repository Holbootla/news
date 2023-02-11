import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation('notFoundPage');

    return (
        <div className={classNames(classes.NotFoundPage, {}, [])}>
            {t('pageNotFound')}
        </div>
    );
};

export default NotFoundPage;

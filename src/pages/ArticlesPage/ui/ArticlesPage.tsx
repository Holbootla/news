import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib';

interface MainPageProps {
    className?:string;
}

const ArticlesPage = memo(({ className }:MainPageProps) => {
    const { t } = useTranslation('articlesPage');

    return (
        <div className={classNames('', {}, [className])}>
            <h1>{t('articlesPageTitle')}</h1>
        </div>
    );
});

export default ArticlesPage;

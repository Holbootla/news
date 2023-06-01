import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib';
import { routePaths } from '@/app/config';

interface MainPageProps {
    className?:string;
}

const ArticlesPage = memo(({ className }:MainPageProps) => {
    const { t } = useTranslation('articlesPage');

    return (
        <div className={classNames('', {}, [className])}>
            <h1>{t('articlesPageTitle')}</h1>
            <Link to={`${routePaths.articles}/1`}>1</Link>
            <br />
            <Link to={`${routePaths.articles}/100`}>100</Link>
        </div>
    );
});

export default ArticlesPage;

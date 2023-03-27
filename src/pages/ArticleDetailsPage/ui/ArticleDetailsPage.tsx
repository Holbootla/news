import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib';

interface MainPageProps {
    className?:string;
}

const ArticleDetailsPage = memo(({ className }:MainPageProps) => {
    const { t } = useTranslation('articleDetailsPage');

    const { id } = useParams();

    return (
        <div className={classNames('', {}, [className])}>
            <h1>
                {t('articleDetailsPage')}
                {id}
            </h1>
        </div>
    );
});

export default ArticleDetailsPage;

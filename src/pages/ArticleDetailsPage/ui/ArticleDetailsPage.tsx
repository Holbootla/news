import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article/ui/ArticleDetails/ArticleDetails';

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('articleDetailsPage');

    const { id } = useParams();

    return (
        <>
            <h1>
                {t('articleDetailsPage')}
                {id}
            </h1>
            <ArticleDetails id={id} />
        </>
    );
});

export default ArticleDetailsPage;

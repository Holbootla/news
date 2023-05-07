import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article/ui/ArticleDetails/ArticleDetails';

const ArticleDetailsPage = memo(() => {
    const { id } = useParams();

    return (
        <ArticleDetails id={id} />
    );
});

export default ArticleDetailsPage;

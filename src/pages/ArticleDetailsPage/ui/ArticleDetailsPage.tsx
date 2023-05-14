import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleComments, ArticleDetails } from '@/entities/Article';

const ArticleDetailsPage = memo(() => {
    const { id } = useParams();

    return (
        <>
            <ArticleDetails id={id} />
            <ArticleComments id={id} />
        </>
    );
});

export default ArticleDetailsPage;

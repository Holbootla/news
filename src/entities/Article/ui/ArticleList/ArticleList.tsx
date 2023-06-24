import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import classes from './ArticleList.module.scss';
import { Article, ArticleListView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?:string;
    articles:Article[];
    view?:ArticleListView;
    isLoading?:boolean;
}

export const ArticleList = ({
    className, articles, view = 'list', isLoading,
}:ArticleListProps) => {
    const { t } = useTranslation('articlesPage');

    if (isLoading) {
        return (
            <div
                data-testid="ArticleList"
                className={classNames(classes.ArticleList, {}, [className, classes[view]])}
            >
                {new Array(view === 'grid' ? 20 : 3)
                    .fill(0)
                // eslint-disable-next-line react/no-array-index-key
                    .map((_, ind) => <ArticleListItemSkeleton view={view} key={ind} />)}
            </div>
        );
    }

    return (
        <div
            data-testid="ArticleList"
            className={classNames(classes.ArticleList, {}, [className, classes[view]])}
        >
            {articles.length ? (
                articles.map((article) => (
                    <ArticleListItem key={article.id} article={article} view={view} />
                ))
            ) : t('articlesNotFound')}
        </div>
    );
};

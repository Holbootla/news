import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './ArticleList.module.scss';
import { Article, ArticleListView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { AppText } from '@/shared/ui/AppText/AppText';

interface ArticleListProps {
    className?:string;
    articles:Article[];
    view?:ArticleListView;
    isLoading?:boolean;
    wrap?:boolean;
    target?:HTMLAttributeAnchorTarget;
}

export const ArticleList = memo(({
    className, articles, view = 'grid', isLoading, wrap = true, target,
}:ArticleListProps) => {
    const { t } = useTranslation('articlesPage');

    if (!isLoading && !articles.length) {
        return (
            <div
                data-testid="ArticleList"
                className={classNames(classes.ArticleList, { [classes.wrap]: wrap }, [className, classes[view]])}
            >
                <AppText text={t('articlesNotFound')} />
            </div>
        );
    }

    return (
        <div
            data-testid="ArticleList"
            className={classNames(classes.ArticleList, { [classes.wrap]: wrap }, [className, classes[view]])}
        >
            {articles?.map((article) => (
                <ArticleListItem key={article.id} article={article} view={view} target={target} />
            ))}
            {isLoading && (
                new Array(view === 'grid' ? 20 : 3)
                    .fill(0)
                    // eslint-disable-next-line react/no-array-index-key
                    .map((_, ind) => <ArticleListItemSkeleton view={view} key={ind} />)
            )}
        </div>
    );
});

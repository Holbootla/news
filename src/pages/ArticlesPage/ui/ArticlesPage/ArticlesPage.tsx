import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
    classNames, ReducersList, useAppDispatch, useDynamicReducerLoading,
} from '@/shared/lib';
import { ArticleList } from '@/entities/Article';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import { getArticlesPageError } from '../../model/selectors/getArticlesPageError/getArticlesPageError';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import {
    getArticlesPageHasMore,
} from '@/pages/ArticlesPage/model/selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import {
    getArticlesPageInited,
} from '@/pages/ArticlesPage/model/selectors/getArticlesPageInited/getArticlesPageInited';
import { Page } from '@/widgets/Page';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';
import classes from './ArticlePage.module.scss';
import { ArticleSortField, ArticleType } from '@/entities/Article/model/types/article';
import { SortOrder } from '@/shared/types';

interface ArticlesPageProps {
    className?:string;
}

const initialReducers:ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(({ className }:ArticlesPageProps) => {
    const { t } = useTranslation('articlesPage');

    const dispatch = useAppDispatch();

    useDynamicReducerLoading({ reducers: initialReducers, removeAfterUnmount: false });

    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const hasMore = useSelector(getArticlesPageHasMore);
    const inited = useSelector(getArticlesPageInited);

    const articles = useSelector(getArticles.selectAll);

    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        if (!inited) {
            const sort = searchParams.get('sort') as ArticleSortField;
            const order = searchParams.get('order') as SortOrder;
            const search = searchParams.get('search');
            const type = searchParams.get('type') as ArticleType;
            dispatch(articlesPageActions.initState({
                sort, order, search, type,
            }));
            dispatch(fetchArticles({}));
        }
    });

    const onLoadNextArticles = useCallback(() => {
        if (hasMore && !isLoading) {
            dispatch(fetchArticles({}));
        }
    }, [dispatch, hasMore, isLoading]);

    return (
        <Page className={classNames('', {}, [className])} onScrollEnd={onLoadNextArticles}>
            <h1>{t('articlesPageTitle')}</h1>
            <ArticlesPageFilter className={classes.filters} />
            <ArticleList
                articles={articles}
                view={view}
                isLoading={isLoading}
            />
        </Page>
    );
});

export default ArticlesPage;

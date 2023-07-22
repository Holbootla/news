import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import classes from './ArticlesPage.module.scss';
import {
    classNames, ReducersList, useAppDispatch, useDynamicReducerLoading,
} from '@/shared/lib';
import { ArticleList, ArticleListView } from '@/entities/Article';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import { getArticlesPageIsLoading } from '../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import { getArticlesPageError } from '../model/selectors/getArticlesPageError/getArticlesPageError';
import { getArticlesPageView } from '../model/selectors/getArticlesPageView/getArticlesPageView';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles';
import { SelectArticlesView } from '@/features/SelectArticlesView';
import { getArticlesPagePage } from '@/pages/ArticlesPage/model/selectors/getArticlesPagePage/getArticlesPagePage';
import {
    getArticlesPageHasMore,
} from '@/pages/ArticlesPage/model/selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import {
    getArticlesPageInited,
} from '@/pages/ArticlesPage/model/selectors/getArticlesPageInited/getArticlesPageInited';
import { Page } from '@/widgets/Page';

interface MainPageProps {
    className?:string;
}

const initialReducers:ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(({ className }:MainPageProps) => {
    const { t } = useTranslation('articlesPage');

    const dispatch = useAppDispatch();

    useDynamicReducerLoading({ reducers: initialReducers, removeAfterUnmount: false });

    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPagePage);
    const hasMore = useSelector(getArticlesPageHasMore);
    const inited = useSelector(getArticlesPageInited);

    const articles = useSelector(getArticles.selectAll);

    useInitialEffect(() => {
        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticles({
                page: 1,
            }));
        }
    });

    const onLoadNextArticles = useCallback(() => {
        if (hasMore && !isLoading) {
            dispatch(fetchArticles({
                page,
            }));
        }
    }, [dispatch, hasMore, isLoading, page]);

    const onChangeView = useCallback((viewType:ArticleListView) => {
        dispatch(articlesPageActions.setView(viewType));
    }, [dispatch]);

    return (
        <Page className={classNames('', {}, [className])} onScrollEnd={onLoadNextArticles}>
            <h1>{t('articlesPageTitle')}</h1>
            <SelectArticlesView view={view} onChange={onChangeView} className={classes['select-articles-view']} />
            <ArticleList
                articles={articles}
                view={view}
                isLoading={isLoading}
            />
        </Page>
    );
});

export default ArticlesPage;

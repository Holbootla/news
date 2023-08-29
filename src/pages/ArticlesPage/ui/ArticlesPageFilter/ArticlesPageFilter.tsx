import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import classes from './ArticlesPageFilter.module.scss';
import { classNames, useAppDispatch } from '@/shared/lib';
import { ArticleListView } from '@/entities/Article';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { SelectArticlesView } from '@/features/SelectArticlesView';
import { AppSelect, AppSelectOption } from '@/shared/ui/AppSelect/AppSelect';
import { AppInput } from '@/shared/ui';
import { ArticleSortField } from '@/entities/Article/model/types/article';
import { getArticlesPageSort } from '@/pages/ArticlesPage/model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageOrder } from '@/pages/ArticlesPage/model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import {
    getArticlesPageSearch,
} from '@/pages/ArticlesPage/model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import { SortOrder } from '@/shared/types';
import { fetchArticles } from '@/pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

interface ArticlesPageFilterProps {
    className?:string;
}

export const ArticlesPageFilter = memo(({ className }:ArticlesPageFilterProps) => {
    const { t } = useTranslation('articlesPage');

    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);

    const sortOptions = useMemo<AppSelectOption[]>(() => [
        { value: ArticleSortField.CREATED, label: t('date') },
        { value: ArticleSortField.TITLE, label: t('title') },
        { value: ArticleSortField.VIEWS, label: t('views') },
    ], [t]);

    const orderOptions = useMemo<AppSelectOption[]>(() => [
        { value: 'asc', label: t('asc') },
        { value: 'desc', label: t('desc') },
    ], [t]);

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeSort = useCallback((sortValue:ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sortValue));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((orderValue:SortOrder) => {
        dispatch(articlesPageActions.setOrder(orderValue));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeView = useCallback((viewType:ArticleListView) => {
        dispatch(articlesPageActions.setView(viewType));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((searchValue:string) => {
        dispatch(articlesPageActions.setSearch(searchValue));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    return (
        <div className={classNames('ArticlesPageFilter', {}, [className])}>
            <div className={classes.filters}>
                <div className={classes.sort}>
                    <AppSelect options={sortOptions} label={t('sort')} value={sort} onChange={onChangeSort} />
                    <AppSelect options={orderOptions} label={t('order')} value={order} onChange={onChangeOrder} />
                </div>
                <SelectArticlesView view={view} onChange={onChangeView} />
            </div>
            <AppInput value={search} placeholder={t('search')} className={classes.search} wide onChange={onChangeSearch} />
        </div>
    );
});

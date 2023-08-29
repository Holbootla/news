import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { getArticlesPageLimit } from '@/pages/ArticlesPage/model/selectors/getArticlesPageLimit/getArticlesPageLimit';
import { getArticlesPageSort } from '@/pages/ArticlesPage/model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageOrder } from '@/pages/ArticlesPage/model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import {
    getArticlesPageSearch,
} from '@/pages/ArticlesPage/model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPagePage } from '@/pages/ArticlesPage/model/selectors/getArticlesPagePage/getArticlesPagePage';
import { addQueryParam } from '@/shared/lib/url/addQueryParam/addQueryParam';

interface fetchArticlesProps {
    replace?:boolean;
}

export const fetchArticles = createAsyncThunk<Article[], fetchArticlesProps, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (
        _,
        {
            rejectWithValue,
            extra,
            getState,
        },
    ) => {
        const state = getState();
        const page = getArticlesPagePage(state);
        const limit = getArticlesPageLimit(state);
        const sort = getArticlesPageSort(state);
        const order = getArticlesPageOrder(state);
        const search = getArticlesPageSearch(state);
        addQueryParam({ sort, order, search: search?.length ? search : null });
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    q: search,
                },
            });

            if (!response?.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit/getArticlesPageLimit';
import { getArticlesPageSort } from '../../selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageOrder } from '../../selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageSearch } from '../../selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPagePage } from '../../selectors/getArticlesPagePage/getArticlesPagePage';
import { addQueryParam } from '@/shared/lib/url/addQueryParam/addQueryParam';
import { getArticlesPageType } from '../../selectors/getArticlesPageType/getArticlesPageType';
import { ArticleType } from '@/entities/Article/model/types/article';

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
        const type = getArticlesPageType(state);
        addQueryParam({
            sort, order, search: search?.length ? search : null, type: type === ArticleType.ALL ? null : type,
        });
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { getArticlesPageLimit } from '@/pages/ArticlesPage/model/selectors/getArticlesPageLimit/getArticlesPageLimit';

interface FetchArticlesProps {
    page:number;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (
        { page },
        {
            rejectWithValue,
            extra,
            getState,
        },
    ) => {
        const limit = getArticlesPageLimit(getState());
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
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

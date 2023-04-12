import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleDataById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetchArticleData',
    async (
        id,
        {
            rejectWithValue,
            extra,
        },
    ) => {
        try {
            const response = await extra.api.get<Article>(`/articles/${id}`);

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

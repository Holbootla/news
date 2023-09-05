import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchRecommendationsByArticleId = createAsyncThunk<Article[], string, ThunkConfig<string>>(
    'articleDetailsPage/fetchArticleRecommendations',
    async (
        id,
        {
            rejectWithValue,
            extra,
        },
    ) => {
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: 5,
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

import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleRecommendationsSchema } from '../../types/articleRecommendations';
import {
    fetchRecommendationsByArticleId,
} from '../../services/fetchRecommendationsByArticleType/fetchRecommendationsByArticleId';

const articleRecommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = articleRecommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || articleRecommendationsAdapter.getInitialState(),
);

export const articleRecommendationsSlice = createSlice({
    name: 'articleRecommendations',
    initialState: articleRecommendationsAdapter.getInitialState<ArticleRecommendationsSchema>({
        ids: [],
        entities: {},
        error: undefined,
        isLoading: false,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendationsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchRecommendationsByArticleId.fulfilled, (state, action:PayloadAction<Article[]>) => {
                state.isLoading = false;
                articleRecommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchRecommendationsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleRecommendationsReducer,
} = articleRecommendationsSlice;

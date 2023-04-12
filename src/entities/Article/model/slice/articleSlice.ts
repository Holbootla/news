import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleSchema } from '../types/article';
import { fetchArticleDataById } from '../services/fetchArticleDataById/fetchArticleDataById';

const initialState:ArticleSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleDataById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleDataById.fulfilled, (state, action:PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleDataById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: articleActions,
    reducer: articleReducer,
} = articleSlice;

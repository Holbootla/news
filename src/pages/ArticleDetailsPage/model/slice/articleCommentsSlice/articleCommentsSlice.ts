import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleCommentsSchema } from '@/pages/ArticleDetailsPage/model/types/articleComments';
import {
    fetchCommentsByArticleId,
} from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const articleCommentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = articleCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || articleCommentsAdapter.getInitialState(),
);

export const articleCommentsSlice = createSlice({
    name: 'articleComments',
    initialState: articleCommentsAdapter.getInitialState<ArticleCommentsSchema>({
        ids: [],
        entities: {},
        error: undefined,
        isLoading: false,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action:PayloadAction<Comment[]>) => {
                state.isLoading = false;
                articleCommentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleCommentsReducer,
} = articleCommentsSlice;

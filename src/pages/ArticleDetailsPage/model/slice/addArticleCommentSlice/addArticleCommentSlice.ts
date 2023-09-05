import { createSlice } from '@reduxjs/toolkit';
import { sendArticleComment } from '../../services/sendArticleComment/sendArticleComment';
import { AddArticleCommentsSchema } from '../../types/addArticleComments';

const initialState:AddArticleCommentsSchema = {
    isLoading: false,
    error: undefined,
};

export const addArticleCommentSlice = createSlice({
    name: 'articleDetailsPage/addArticleComments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendArticleComment.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(sendArticleComment.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(sendArticleComment.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: addArticleCommentActions,
    reducer: addArticleCommentReducer,
} = addArticleCommentSlice;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getArticleData } from '@/entities/Article/model/selectors/getArticleData/getArticleData';
import {
    fetchCommentsByArticleId,
} from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const sendArticleComment = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetailsPage/sendArticleComment',
    async (
        text,
        {
            rejectWithValue,
            extra,
            getState,
            dispatch,
        },
    ) => {
        try {
            const user = getUserAuthData(getState());
            const article = getArticleData(getState());

            if (!user || !article || !text) {
                throw new Error();
            }

            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: user.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

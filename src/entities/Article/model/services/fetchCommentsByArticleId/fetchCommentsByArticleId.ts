import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
    'article/fetchArticleComments',
    async (
        id,
        {
            rejectWithValue,
            extra,
        },
    ) => {
        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId: id,
                    _expand: 'user',
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

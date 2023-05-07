/* eslint-disable max-len */
import { articleReducer } from './articleSlice';
import { ArticleSchema } from '../types/article';
import { fetchArticleDataById } from '../services/fetchArticleDataById/fetchArticleDataById';
import { articleDataMock } from '../mocks/articleDataMock';

describe('articleSlice', () => {
    test('fetchArticleDataById pending', () => {
        const state:DeepPartial<ArticleSchema> = {
            error: '',
            isLoading: false,
        };
        expect(
            articleReducer(state as ArticleSchema, fetchArticleDataById.pending),
        )
            .toEqual({
                error: undefined,
                isLoading: true,
            });
    });

    test('fetchArticleDataById fulfilled', () => {
        const state:DeepPartial<ArticleSchema> = {
            isLoading: true,
            data: undefined,
        };
        expect(
            articleReducer(state as ArticleSchema, fetchArticleDataById.fulfilled(articleDataMock, '', '')),
        )
            .toEqual({
                isLoading: false,
                data: articleDataMock,
            });
    });
});

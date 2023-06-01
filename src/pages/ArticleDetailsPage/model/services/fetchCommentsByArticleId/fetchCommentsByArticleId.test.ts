import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { articleCommentsDataMock } from '../../../../../entities/Article/model/mocks/articleCommentsDataMock';

describe('fetchCommentsByArticleId async service tests', () => {
    const articleId = '1';

    test('Success data fetching', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: articleCommentsDataMock }));
        const result = await thunk.callThunk(articleId);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(articleCommentsDataMock);
    });

    test('Fail data fetching', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 500 }));
        const result = await thunk.callThunk(articleId);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});

import { fetchArticleDataById } from './fetchArticleDataById';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { articleDataMock } from '../../mocks/articleDataMock';

describe('fetchArticleDataById async service tests', () => {
    const articleId = '1';

    test('Success data fetching', async () => {
        const thunk = new TestAsyncThunk(fetchArticleDataById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: articleDataMock }));
        const result = await thunk.callThunk(articleId);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(articleDataMock);
    });

    test('Fail data fetching', async () => {
        const thunk = new TestAsyncThunk(fetchArticleDataById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(articleId);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});

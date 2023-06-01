import { sendArticleComment } from './sendArticleComment';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { Comment } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('Send comment async service tests', () => {
    const state:DeepPartial<StateSchema> = {
        article: {
            data: {
                id: '1',
            },
        },
        user: {
            authData: {
                id: '1',
            },
        },
    };

    test('Success sending', async () => {
        const comment:Comment = { id: '1', text: 'text', user: { id: '1', username: 'user' } };

        const thunk = new TestAsyncThunk(sendArticleComment, state);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await thunk.callThunk('text');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comment);
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    });

    test('Fail sending', async () => {
        const thunk = new TestAsyncThunk(sendArticleComment, state);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 500 }));
        const result = await thunk.callThunk('text');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.payload).toEqual('error');
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});

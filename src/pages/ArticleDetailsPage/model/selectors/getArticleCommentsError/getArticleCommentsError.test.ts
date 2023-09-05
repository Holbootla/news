import { getArticleCommentsError } from './getArticleCommentsError';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticleCommentsError', () => {
    test('should return articleCommentsData state', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: 'error',
                },
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toBe('error');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
    });
});

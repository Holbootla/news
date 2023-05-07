import { getArticleError } from './getArticleError';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticleError', () => {
    test('should return articleData state', () => {
        const state:DeepPartial<StateSchema> = {
            article: {
                error: 'error',
            },
        };
        expect(getArticleError(state as StateSchema)).toBe('error');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticleError(state as StateSchema)).toEqual(undefined);
    });
});

import { getArticleCommentsIsLoading } from './getArticleCommentsIsLoading';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticleCommentsIsLoading', () => {
    test('should return articleCommentsData state', () => {
        const state:DeepPartial<StateSchema> = {
            articleComments: {
                isLoading: true,
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

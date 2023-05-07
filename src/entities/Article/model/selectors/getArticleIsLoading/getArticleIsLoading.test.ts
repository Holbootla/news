import { getArticleIsLoading } from './getArticleIsLoading';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticleIsLoading', () => {
    test('should return articleData state', () => {
        const state:DeepPartial<StateSchema> = {
            article: {
                isLoading: true,
            },
        };
        expect(getArticleIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticleIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

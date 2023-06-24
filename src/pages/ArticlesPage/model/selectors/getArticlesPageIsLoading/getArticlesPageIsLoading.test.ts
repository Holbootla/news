import { getArticlesPageIsLoading } from './getArticlesPageIsLoading';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticlesPageIsLoading', () => {
    test('should return articlesPageData state', () => {
        const state:DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            },
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

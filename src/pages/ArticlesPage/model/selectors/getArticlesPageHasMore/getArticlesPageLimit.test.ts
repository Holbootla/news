import { getArticlesPageHasMore } from './getArticlesPageHasMore';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticlesPageHasMore', () => {
    test('should return articlesPageData state', () => {
        const state:DeepPartial<StateSchema> = {
            articlesPage: {
                hasMore: true,
            },
        };
        expect(getArticlesPageHasMore(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticlesPageHasMore(state as StateSchema)).toEqual(undefined);
    });
});

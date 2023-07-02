import { getArticlesPageLimit } from './getArticlesPageLimit';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticlesPageLimit', () => {
    test('should return articlesPageData state', () => {
        const state:DeepPartial<StateSchema> = {
            articlesPage: {
                limit: 10,
            },
        };
        expect(getArticlesPageLimit(state as StateSchema)).toBe(10);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(undefined);
    });
});

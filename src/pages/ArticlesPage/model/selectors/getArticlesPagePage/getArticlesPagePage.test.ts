import { getArticlesPagePage } from './getArticlesPagePage';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticlesPagePage', () => {
    test('should return articlesPageData state', () => {
        const state:DeepPartial<StateSchema> = {
            articlesPage: {
                page: 1,
            },
        };
        expect(getArticlesPagePage(state as StateSchema)).toBe(1);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticlesPagePage(state as StateSchema)).toEqual(undefined);
    });
});

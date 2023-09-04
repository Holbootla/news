import { getArticlesPageSearch } from './getArticlesPageSearch';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticlesPageSearch', () => {
    test('should return articlesPageData state', () => {
        const state:DeepPartial<StateSchema> = {
            articlesPage: {
                search: 'text',
            },
        };
        expect(getArticlesPageSearch(state as StateSchema)).toBe('text');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticlesPageSearch(state as StateSchema)).toEqual('');
    });
});

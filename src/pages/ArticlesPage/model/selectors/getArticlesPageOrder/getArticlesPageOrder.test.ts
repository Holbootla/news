import { getArticlesPageOrder } from './getArticlesPageOrder';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticlesPageOrder', () => {
    test('should return articlesPageData state', () => {
        const state:DeepPartial<StateSchema> = {
            articlesPage: {
                order: 'asc',
            },
        };
        expect(getArticlesPageOrder(state as StateSchema)).toBe('asc');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticlesPageOrder(state as StateSchema)).toEqual(undefined);
    });
});

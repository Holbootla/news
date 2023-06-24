import { getArticlesPageView } from './getArticlesPageView';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticlesPageView', () => {
    test('should return articlesPageData state', () => {
        const state:DeepPartial<StateSchema> = {
            articlesPage: {
                view: 'grid',
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toBe('grid');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticlesPageView(state as StateSchema)).toEqual(undefined);
    });
});

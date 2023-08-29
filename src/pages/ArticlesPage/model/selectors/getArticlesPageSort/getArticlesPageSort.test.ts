import { getArticlesPageSort } from './getArticlesPageSort';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField } from '@/entities/Article/model/types/article';

describe('getArticlesPageSort', () => {
    test('should return articlesPageData state', () => {
        const state:DeepPartial<StateSchema> = {
            articlesPage: {
                sort: ArticleSortField.VIEWS,
            },
        };
        expect(getArticlesPageSort(state as StateSchema)).toBe('views');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticlesPageSort(state as StateSchema)).toEqual(undefined);
    });
});

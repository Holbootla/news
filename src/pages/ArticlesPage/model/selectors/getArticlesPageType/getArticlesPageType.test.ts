import { getArticlesPageType } from './getArticlesPageType';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entities/Article/model/types/article';

describe('getArticlesPageType', () => {
    test('should return articlesPageData state', () => {
        const state:DeepPartial<StateSchema> = {
            articlesPage: {
                type: ArticleType.ALL,
            },
        };
        expect(getArticlesPageType(state as StateSchema)).toBe(ArticleType.ALL);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticlesPageType(state as StateSchema)).toEqual(undefined);
    });
});

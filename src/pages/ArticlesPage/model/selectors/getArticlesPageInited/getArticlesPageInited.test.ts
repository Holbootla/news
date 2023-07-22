import { getArticlesPageInited } from './getArticlesPageInited';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticlesPageInited', () => {
    test('should return articlesPageData state', () => {
        const state:DeepPartial<StateSchema> = {
            articlesPage: {
                _inited: true,
            },
        };
        expect(getArticlesPageInited(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticlesPageInited(state as StateSchema)).toEqual(undefined);
    });
});

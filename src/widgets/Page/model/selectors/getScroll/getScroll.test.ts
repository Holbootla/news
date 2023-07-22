import { getScroll } from './getScroll';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getScroll', () => {
    test('should return scroll state', () => {
        const state:DeepPartial<StateSchema> = {
            page: {
                scroll: { articlesPage: 100, articlePage: 200 },
            },
        };
        expect(getScroll(state as StateSchema)).toEqual({ articlesPage: 100, articlePage: 200 });
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getScroll(state as StateSchema)).toEqual(undefined);
    });
});

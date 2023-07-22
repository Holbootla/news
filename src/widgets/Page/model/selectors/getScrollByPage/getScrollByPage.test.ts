import { getScrollByPage } from './getScrollByPage';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getScrollByPage', () => {
    test('should return scroll state', () => {
        const state:DeepPartial<StateSchema> = {
            page: {
                scroll: { articlesPage: 100 },
            },
        };
        expect(getScrollByPage(state as StateSchema, 'articlesPage')).toBe(100);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getScrollByPage(state as StateSchema, 'somePage')).toEqual(0);
    });
});

import { getAddArticleCommentIsLoading } from './getAddArticleCommentIsLoading';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('tests for getAddArticleCommentIsLoading selector', () => {
    test('should return isLoading === true', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetailsPage: {
                addComments: {
                    isLoading: true,
                },
            },
        };
        expect(getAddArticleCommentIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return isLoading === false', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetailsPage: {
                addComments: {
                    isLoading: false,
                },
            },
        };
        expect(getAddArticleCommentIsLoading(state as StateSchema)).toEqual(false);
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getAddArticleCommentIsLoading(state as StateSchema)).toEqual(false);
    });
});

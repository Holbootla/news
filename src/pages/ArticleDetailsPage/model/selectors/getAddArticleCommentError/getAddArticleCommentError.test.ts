import { getAddArticleCommentError } from './getAddArticleCommentError';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('tests for getAddArticleCommentError selector', () => {
    test('should return error', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetailsPage: {
                addComments: {
                    error: 'error',
                },
            },
        };
        expect(getAddArticleCommentError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getAddArticleCommentError(state as StateSchema)).toEqual(undefined);
    });
});

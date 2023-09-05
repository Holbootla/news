import { getArticleRecommendationsError } from './getArticleRecommendationsError';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticleRecommendationsError', () => {
    test('should return articleRecommendationsData state', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetailsPage: {
                recommendations: {
                    error: 'error',
                },
            },
        };
        expect(getArticleRecommendationsError(state as StateSchema)).toBe('error');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticleRecommendationsError(state as StateSchema)).toEqual(undefined);
    });
});

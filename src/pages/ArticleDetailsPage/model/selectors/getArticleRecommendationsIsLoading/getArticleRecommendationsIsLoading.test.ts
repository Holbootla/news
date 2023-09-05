import { getArticleRecommendationsIsLoading } from './getArticleRecommendationsIsLoading';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticleRecommendationsIsLoading', () => {
    test('should return articleRecommendationsData state', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetailsPage: {
                recommendations: {
                    isLoading: true,
                },
            },
        };
        expect(getArticleRecommendationsIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticleRecommendationsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

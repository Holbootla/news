import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state:StateSchema) => state.articleDetailsPage?.recommendations?.isLoading;

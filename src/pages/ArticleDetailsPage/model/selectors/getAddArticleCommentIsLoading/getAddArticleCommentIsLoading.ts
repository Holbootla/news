import { StateSchema } from '@/app/providers/StoreProvider';

export const getAddArticleCommentIsLoading = (state:StateSchema) => state.addArticleComment?.isLoading ?? false;

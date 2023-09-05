import { StateSchema } from '@/app/providers/StoreProvider';

export const getAddArticleCommentError = (state:StateSchema) => state.articleDetailsPage?.addComments?.error;

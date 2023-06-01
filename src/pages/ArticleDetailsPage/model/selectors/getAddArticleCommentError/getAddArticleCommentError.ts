import { StateSchema } from '@/app/providers/StoreProvider';

export const getAddArticleCommentError = (state:StateSchema) => state.addArticleComment?.error;

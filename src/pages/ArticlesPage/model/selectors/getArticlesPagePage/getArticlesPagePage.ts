import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesPagePage = (state:StateSchema) => state.articlesPage?.page;

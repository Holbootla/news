import { lazy } from 'react';

export const ArticleDetailsPage = lazy(() => import('./ui/ArticleDetailsPage'));
export { AddArticleCommentsSchema } from './model/types/addArticleComments';
export { ArticleCommentsSchema } from './model/types/articleComments';
export { ArticleDetailsPageSchema } from './model/types';

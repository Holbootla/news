import { lazy } from 'react';

export const ArticleDetailsPage = lazy(() => import('./ui/ArticleDetailsPage'));
export { AddArticleCommentSchema } from './model/types/addArticleComment';
export { ArticleCommentsSchema } from './model/types/articleComments';

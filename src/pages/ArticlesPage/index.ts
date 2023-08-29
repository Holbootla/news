import { lazy } from 'react';

export const ArticlesPage = lazy(() => import('./ui/ArticlesPage/ArticlesPage'));

export { ArticlesPageSchema } from './model/types/articlesPage';

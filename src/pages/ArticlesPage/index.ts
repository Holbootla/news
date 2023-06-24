import { lazy } from 'react';

export const ArticlesPage = lazy(() => import('./ui/ArticlesPage'));

export { ArticlesPageSchema } from './model/types/articlesPage';

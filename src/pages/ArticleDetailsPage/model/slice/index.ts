import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { articleCommentsReducer } from './articleCommentsSlice/articleCommentsSlice';
import { addArticleCommentReducer } from './addArticleCommentSlice/addArticleCommentSlice';
import { articleRecommendationsReducer } from './articleRecommendationsSlice/articleRecommendationsSlice';

export const ArticleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleCommentsReducer,
    addComments: addArticleCommentReducer,
    recommendations: articleRecommendationsReducer,
});

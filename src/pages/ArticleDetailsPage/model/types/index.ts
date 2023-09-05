import { ArticleCommentsSchema } from './articleComments';
import { ArticleRecommendationsSchema } from './articleRecommendations';
import { AddArticleCommentsSchema } from './addArticleComments';

export interface ArticleDetailsPageSchema {
    comments: ArticleCommentsSchema,
    addComments: AddArticleCommentsSchema,
    recommendations: ArticleRecommendationsSchema,
}

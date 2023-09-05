import { memo, Suspense, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classes from './ArticleDetailsPage.module.scss';
import { ArticleDetails, ArticleList } from '@/entities/Article';
import { AddCommentForm } from '@/features/AddComment';
import { ReducersList, useAppDispatch, useDynamicReducerLoading } from '@/shared/lib';
import { sendArticleComment } from '../model/services/sendArticleComment/sendArticleComment';
import { getAddArticleCommentError } from '../model/selectors/getAddArticleCommentError/getAddArticleCommentError';
import {
    getAddArticleCommentIsLoading,
} from '../model/selectors/getAddArticleCommentIsLoading/getAddArticleCommentIsLoading';
import { getArticleComments } from '../model/slice/articleCommentsSlice/articleCommentsSlice';
import {
    getArticleCommentsIsLoading,
} from '../model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import { getArticleCommentsError } from '../model/selectors/getArticleCommentsError/getArticleCommentsError';
import { CommentList } from '@/entities/Comment';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AppText } from '@/shared/ui/AppText/AppText';
import { AppButton, AppSpinner } from '@/shared/ui';
import { routePaths } from '@/app/config';
import { Page } from '@/widgets/Page';
import {
    getArticleRecommendationsIsLoading,
} from '../model/selectors/getArticleRecommendationsIsLoading/getArticleRecommendationsIsLoading';
import {
    getArticleRecommendationsError,
} from '../model/selectors/getArticleRecommendationsError/getArticleRecommendationsError';
import { getArticleRecommendations } from '../model/slice/articleRecommendationsSlice/articleRecommendationsSlice';
import {
    fetchRecommendationsByArticleId,
} from '@/pages/ArticleDetailsPage/model/services/fetchRecommendationsByArticleType/fetchRecommendationsByArticleId';
import { ArticleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slice';

const initialReducers:ReducersList = {
    articleDetailsPage: ArticleDetailsPageReducer,
};

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const { id } = useParams();

    const dispatch = useAppDispatch();

    useDynamicReducerLoading({ reducers: initialReducers, removeAfterUnmount: true });

    const addArticleCommentIsLoading = useSelector(getAddArticleCommentIsLoading);
    const addArticleCommentError = useSelector(getAddArticleCommentError);

    const articleCommentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const articleCommentsError = useSelector(getArticleCommentsError);
    const comments = useSelector(getArticleComments.selectAll);

    const articleRecommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const articleRecommendationsError = useSelector(getArticleRecommendationsError);
    const recommendedArticles = useSelector(getArticleRecommendations.selectAll);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchRecommendationsByArticleId(id));
    });

    const onSendComment = useCallback((value:string) => {
        dispatch(sendArticleComment(value));
    }, [dispatch]);

    const onBackToArticles = useCallback(() => {
        navigate(routePaths.articles);
    }, [navigate]);

    return (
        <Page>
            <AppButton onClick={onBackToArticles} className={classes['back-btn']}>{t('backToArticles')}</AppButton>
            <ArticleDetails id={id} className={classes['article-details']} />
            <AppText title={t('comments')} className={classes.title} />
            <Suspense fallback={<AppSpinner />}>
                <AddCommentForm onSendComment={onSendComment} error={addArticleCommentError} isLoading={addArticleCommentIsLoading} />
            </Suspense>
            <CommentList comments={comments} isLoading={articleCommentsIsLoading} error={articleCommentsError} className={classes.comments} />
            {!articleRecommendationsError && (
                <>
                    <AppText title={t('recommendedArticles')} className={classes.title} />
                    <ArticleList articles={recommendedArticles} isLoading={articleRecommendationsIsLoading} wrap={false} target="_blank" />
                </>
            )}
        </Page>
    );
});

export default ArticleDetailsPage;

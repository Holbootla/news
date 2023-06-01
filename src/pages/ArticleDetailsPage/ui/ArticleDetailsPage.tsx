import { memo, Suspense, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/Article';
import { AddCommentForm } from '@/features/AddComment';
import { ReducersList, useAppDispatch, useDynamicReducerLoading } from '@/shared/lib';
import { sendArticleComment } from '../model/services/sendArticleComment/sendArticleComment';
import { addArticleCommentReducer } from '../model/slice/addArticleCommentSlice/addArticleCommentSlice';
import { getAddArticleCommentError } from '../model/selectors/getAddArticleCommentError/getAddArticleCommentError';
import {
    getAddArticleCommentIsLoading,
} from '../model/selectors/getAddArticleCommentIsLoading/getAddArticleCommentIsLoading';
import { articleCommentsReducer, getArticleComments } from '../model/slice/articleCommentSlice/articleCommentsSlice';
import {
    getArticleCommentsIsLoading,
} from '../model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import { getArticleCommentsError } from '../model/selectors/getArticleCommentsError/getArticleCommentsError';
import { CommentList } from '@/entities/Comment';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AppText } from '@/shared/ui/AppText/AppText';
import { AppSpinner } from '@/shared/ui';

const initialReducers:ReducersList = {
    articleComments: articleCommentsReducer,
    addArticleComment: addArticleCommentReducer,
};

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation();

    const { id } = useParams();

    const dispatch = useAppDispatch();

    useDynamicReducerLoading({ reducers: initialReducers, removeAfterUnmount: true });

    const articleCommentIsLoading = useSelector(getArticleCommentsIsLoading);
    const articleCommentError = useSelector(getArticleCommentsError);
    const comments = useSelector(getArticleComments.selectAll);

    const addArticleCommentIsLoading = useSelector(getAddArticleCommentIsLoading);
    const addArticleCommentError = useSelector(getAddArticleCommentError);

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    const onSendComment = useCallback((value:string) => {
        dispatch(sendArticleComment(value));
    }, [dispatch]);

    return (
        <>
            <ArticleDetails id={id} />
            <AppText title={t('comments')} />
            <Suspense fallback={<AppSpinner />}>
                <AddCommentForm onSendComment={onSendComment} error={addArticleCommentError} isLoading={addArticleCommentIsLoading} />
            </Suspense>
            <CommentList comments={comments} isLoading={articleCommentIsLoading} error={articleCommentError} />
        </>
    );
});

export default ArticleDetailsPage;

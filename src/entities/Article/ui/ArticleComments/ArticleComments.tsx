import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    classNames, ReducersList, useAppDispatch, useDynamicReducerLoading,
} from '@/shared/lib';
import classes from './ArticleComments.module.scss';
import { getArticleCommentsError } from '../../model/selectors/getArticleCommentsError/getArticleCommentsError';
import { articleCommentsReducer, getArticleComments } from '../../model/slice/articleCommentsSlice';
import { AppText, AppTextVariants } from '@/shared/ui/AppText/AppText';
import { CommentList } from '@/entities/Comment';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import {
    getArticleCommentsIsLoading,
} from '../../model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleCommentsProps {
    className?:string;
    id:string;
}

const initialReducers:ReducersList = {
    articleComments: articleCommentsReducer,
};

export const ArticleComments = memo(({ className, id }:ArticleCommentsProps) => {
    const { t } = useTranslation();

    useDynamicReducerLoading({ reducers: initialReducers, removeAfterUnmount: true });

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);
    const data = useSelector(getArticleComments.selectAll);

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    if (error) {
        return (
            <div
                data-testid="ArticleComments"
                className={classNames(classes.ArticleComments, {}, [className])}
            >
                <h2 className={classes.title}>{t('comments')}</h2>
                <AppText
                    title={t('articleCommentsError')}
                    text={t(error)}
                    variant={AppTextVariants.CRITICAL}
                    className={classNames(classes.ArticleComments, {}, [className])}
                />
            </div>
        );
    }

    return (
        <div
            data-testid="ArticleComments"
            className={classNames(classes.ArticleComments, {}, [className])}
        >
            <h2 className={classes.title}>{t('comments')}</h2>
            <CommentList comments={data} isLoading={isLoading} />
        </div>
    );
});

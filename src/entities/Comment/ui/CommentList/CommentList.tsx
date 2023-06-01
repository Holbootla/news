import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import classes from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { AppText, AppTextVariants } from '@/shared/ui/AppText/AppText';

interface CommentListProps {
    className?:string;
    comments?:Comment[];
    isLoading?:boolean;
    error?:string;
}

export const CommentList = memo(({
    className, comments, isLoading, error,
}:CommentListProps) => {
    const { t } = useTranslation();

    if (error) {
        return (
            <AppText
                title={t('articleCommentsError')}
                text={t(error)}
                variant={AppTextVariants.CRITICAL}
                className={classNames(classes.ArticleComments, {}, [className])}
            />
        );
    }

    if (isLoading) {
        return (
            <div
                data-testid="CommentList"
                className={classNames(classes.CommentList, {}, [className])}
            >
                <CommentCard comment={null} className={classes['comment-card']} />
                <CommentCard comment={null} className={classes['comment-card']} />
                <CommentCard comment={null} className={classes['comment-card']} />
            </div>
        );
    }

    return (
        <div
            data-testid="CommentList"
            className={classNames(classes.CommentList, {}, [className])}
        >
            {comments?.map((comment) => <CommentCard comment={comment} className={classes['comment-card']} />)}
        </div>
    );
});

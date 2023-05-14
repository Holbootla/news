import { memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?:string;
    comments?:Comment[];
    isLoading?:boolean;
}

export const CommentList = memo(({ className, comments, isLoading }:CommentListProps) => {
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

import { memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { AppLink, Skeleton } from '@/shared/ui';
import { AppAvatar, AppAvatarSizes } from '@/shared/ui/AppAvatar/AppAvatar';
import { routePaths } from '@/app/config';

interface CommentCardProps {
    className?:string;
    comment?:Comment;
}

export const CommentCard = memo(({ className, comment }:CommentCardProps) => {
    if (!comment) {
        return (
            <div
                data-testid="CommentCard"
                className={classNames(classes.CommentCard, {}, [className])}
            >
                <div className={classes.header}>
                    <Skeleton className={classes.avatar} width={50} height={50} borderRadius="50%" />
                    <Skeleton className={classes.name} width="30%" height={25} />
                </div>
                <Skeleton className={classes.text} width="100%" height={100} />
            </div>
        );
    }

    return (
        <div
            data-testid="CommentCard"
            className={classNames(classes.CommentCard, {}, [className])}
        >
            <AppLink className={classes.header} to={`${routePaths.profile}/${comment.user.id}`}>
                <AppAvatar className={classes.avatar} source={comment.user.avatar} size={AppAvatarSizes.XS} />
                <h5 className={classes.username}>{comment.user.username}</h5>
            </AppLink>
            <div className={classes.text}>{comment.text}</div>
        </div>
    );
});

import { memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './ArticleListItem.module.scss';
import { ArticleListView } from '../../model/types/article';
import { AppCard, Skeleton } from '@/shared/ui';

interface ArticleListItemSkeletonProps {
    className?:string;
    view:ArticleListView;
}

export const ArticleListItemSkeleton = memo(({ className, view }:ArticleListItemSkeletonProps) => {
    if (view === 'grid') {
        return (
            <AppCard
                data-testid="ArticleListItem"
                className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}
            >
                <div className={classes['image-wrapper']}>
                    <Skeleton width={220} height={200} />
                </div>
                <div className={classes.header}>
                    <Skeleton width={140} height={24} />
                    <Skeleton width={54} height={24} />
                </div>
                <Skeleton width={220} height={24} />
            </AppCard>
        );
    }

    return (
        <AppCard
            data-testid="ArticleListItem"
            className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}
        >
            <div className={classes.header}>
                <div className={classes.user}>
                    <Skeleton width={50} height={50} borderRadius={50} />
                    <Skeleton width={50} height={24} />
                </div>
                <Skeleton width={98} height={24} />
            </div>
            <Skeleton width="50%" height={32} />
            <Skeleton width={100} height={24} className={classes.types} />
            <Skeleton width="100%" height={250} className={classes.image} />
            <Skeleton width="100%" height={200} className={classes.content} />
            <div className={classes.footer}>
                <Skeleton width={110} height={26} />
                <Skeleton width={54} height={24} />
            </div>
        </AppCard>
    );
});

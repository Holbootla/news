import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    classNames, ReducersList, useAppDispatch, useDynamicReducerLoading,
} from '@/shared/lib';
import classes from './ArticleDetails.module.scss';
import { fetchArticleDataById } from '../../model/services/fetchArticleDataById/fetchArticleDataById';
import { getArticleError } from '../../model/selectors/getArticleError/getArticleError';
import { getArticleData } from '../../model/selectors/getArticleData/getArticleData';
import { articleReducer } from '../../model/slice/articleSlice';
import { AppText, AppTextVariants } from '@/shared/ui/AppText/AppText';
import { Icon, Skeleton } from '@/shared/ui';
import { getArticleIsLoading } from '../../model/selectors/getArticleIsLoading/getArticleIsLoading';
import { AppAvatar } from '@/shared/ui/AppAvatar/AppAvatar';
import EyeIcon from '@/shared/assets/icons/eye-icon.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-icon.svg';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleDetailsBlockCode } from '../ArticleDetailsBlockCode/ArticleDetailsBlockCode';
import { ArticleDetailsBlockImage } from '../ArticleDetailsBlockImage/ArticleDetailsBlockImage';
import { ArticleDetailsBlockText } from '../ArticleDetailsBlockText/ArticleDetailsBlockText';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';

interface ArticleDetailsProps {
    className?:string;
    id:string;
}

const initialReducers:ReducersList = {
    article: articleReducer,
};

export const ArticleDetails = memo(({ className, id }:ArticleDetailsProps) => {
    const { t } = useTranslation('articleDetailsPage');

    useDynamicReducerLoading({ reducers: initialReducers, removeAfterUnmount: true });

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);
    const data = useSelector(getArticleData);

    useInitialEffect(() => dispatch(fetchArticleDataById(id)));

    const renderBlock = useCallback((block:ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleDetailsBlockCode key={id + block.id} block={block} className={classes.block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleDetailsBlockImage key={id + block.id} block={block} className={classes.block} />;
        case ArticleBlockType.TEXT:
            return <ArticleDetailsBlockText key={id + block.id} block={block} className={classes.block} />;
        default:
            return null;
        }
    }, [id]);

    if (isLoading) {
        return (
            <article
                data-testid="ArticleDetails"
                className={classNames(classes.ArticleDetails, {}, [className])}
            >
                <Skeleton className={classes.avatar} width={200} height={200} borderRadius="50%" />
                <Skeleton className={classes.title} width="60%" height={50} />
                <Skeleton className={classes['sub-title']} width="30%" height={30} />
                <Skeleton className={classes['article-info']} width={120} height={25} />
                <Skeleton className={classes['article-info']} width={120} height={25} />
                <Skeleton className={classNames(classes['article-body'], {}, [classes.block])} width="100%" height={400} />
            </article>
        );
    }

    if (error) {
        return (
            <article
                data-testid="ArticleDetails"
                className={classNames(classes.ArticleDetails, {}, [className])}
            >
                <AppText
                    title={t('articleError')}
                    text={t(error)}
                    variant={AppTextVariants.CRITICAL}
                    className={classNames(classes.ArticleDetails, {}, [className])}
                />
            </article>
        );
    }

    return (
        <article
            data-testid="ArticleDetails"
            className={classNames(classes.ArticleDetails, {}, [className])}
        >
            {data?.img && <AppAvatar className={classes.avatar} source={data.img} />}
            <h1 className={classes.title}>{data?.title}</h1>
            <AppText className={classes['sub-title']} title={data?.subtitle} />
            <div className={classes['article-info']}>
                <Icon Svg={EyeIcon} size="s" />
                <AppText text={`${data?.views}`} />
            </div>
            <div className={classes['article-info']}>
                <Icon Svg={CalendarIcon} size="s" />
                <AppText text={`${data?.createdAt}`} />
            </div>
            {data?.blocks?.map((block) => renderBlock(block))}
        </article>
    );
});

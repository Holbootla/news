import { memo, useEffect } from 'react';
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
import { Skeleton } from '@/shared/ui';
import { getArticleIsLoading } from '@/entities/Article/model/selectors/getArticleIsLoading/getArticleIsLoading';

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

    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            dispatch(fetchArticleDataById(id));
        }
    }, [dispatch, id]);

    if (isLoading) {
        return (
            <div
                data-testid="ArticleDetails"
                className={classNames(classes.ArticleDetails, {}, [className])}
            >
                <Skeleton className={classes.avatar} width={200} height={200} borderRadius="50%" />
                <Skeleton className={classes.title} width="100%" height={50} />
                <Skeleton className={classes['article-body']} width="100%" height={400} />
            </div>
        );
    }

    if (error) {
        return (
            <AppText title={t('articleError')} text={t(error)} variant={AppTextVariants.CRITICAL} />
        );
    }

    return (
        <div
            data-testid="ArticleDetails"
            className={classNames(classes.ArticleDetails, {}, [className])}
        >
            {JSON.stringify(data?.title)}
        </div>
    );
});

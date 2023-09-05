import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib';
import classes from './ArticleListItem.module.scss';
import {
    Article, ArticleBlockType, ArticleListView, ArticleTextBlock,
} from '../../model/types/article';
import { AppText } from '@/shared/ui/AppText/AppText';
import { AppButton, AppCard, Icon } from '@/shared/ui';
import EyeIcon from '@/shared/assets/icons/eye-icon.svg';
import { AppAvatar, AppAvatarSizes } from '@/shared/ui/AppAvatar/AppAvatar';
import { ArticleDetailsBlockText } from '../ArticleDetailsBlockText/ArticleDetailsBlockText';
import { routePaths } from '@/app/config';

interface ArticleListItemProps {
    className?:string;
    article:Article;
    view:ArticleListView;
    target?:HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(({
    className, article, view, target,
}:ArticleListItemProps) => {
    const { t } = useTranslation('articlesPage');

    if (view === 'grid') {
        return (
            <Link to={`${routePaths.article_details}/${article.id}`} target={target}>
                <AppCard
                    data-testid="ArticleListItem"
                    className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}
                >
                    <div className={classes['image-wrapper']}>
                        <img src={article.img} alt={article.title} className={classes.image} />
                        <AppText text={article.createdAt} className={classes.date} />
                    </div>
                    <div className={classes.header}>
                        <AppText text={article.type.join(', ')} className={classes.types} />
                        <div className={classes.views}>
                            <Icon Svg={EyeIcon} size="s" />
                            <AppText text={`${article.views}`} />
                        </div>
                    </div>
                    <AppText text={article.title} className={classes.title} />
                </AppCard>
            </Link>
        );
    }

    const textBlock = article.blocks.find(((block) => block.type === ArticleBlockType.TEXT)) as ArticleTextBlock;

    return (
        <AppCard
            data-testid="ArticleListItem"
            className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}
        >
            <div className={classes.header}>
                <div className={classes.user}>
                    <AppAvatar source={article.user.avatar} size={AppAvatarSizes.XS} />
                    <AppText text={article.user.username} />
                </div>
                <AppText text={article.createdAt} />
            </div>
            <AppText title={article.title} className={classes.title} />
            <AppText text={article.type.join(', ')} className={classes.types} />
            <img src={article.img} alt={article.title} className={classes.image} />
            {textBlock && <ArticleDetailsBlockText block={textBlock} className={classes.content} />}
            <div className={classes.footer}>
                <Link to={`${routePaths.article_details}/${article.id}`} target={target}>
                    <AppButton>
                        {t('readArticle')}
                    </AppButton>
                </Link>
                <div className={classes.views}>
                    <Icon Svg={EyeIcon} size="s" />
                    <AppText text={`${article.views}`} />
                </div>
            </div>
        </AppCard>
    );
});

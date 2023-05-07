import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import classes from './ArticleDetailsBlockImage.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { AppText, AppTextVariants } from '@/shared/ui/AppText/AppText';

interface ArticleDetailsBlockImageProps {
    className?:string;
    block:ArticleImageBlock
}

export const ArticleDetailsBlockImage = memo(({ className, block }:ArticleDetailsBlockImageProps) => {
    const { t } = useTranslation();

    return (
        <div
            data-testid="ArticleDetailsBlockImage"
            className={classNames(classes.ArticleDetailsBlockImage, {}, [className])}
        >
            <img src={block.src} alt={block.title} className={classes.image} />
            <AppText text={block.title} variant={AppTextVariants.SECONDARY} />
            {}
        </div>
    );
});

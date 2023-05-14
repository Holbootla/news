import { memo } from 'react';
import { classNames } from '@/shared/lib';
import classes from './ArticleDetailsBlockText.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { AppText } from '@/shared/ui/AppText/AppText';

interface ArticleDetailsBlockTextProps {
    className?:string;
    block:ArticleTextBlock
}

export const ArticleDetailsBlockText = memo(({ className, block }:ArticleDetailsBlockTextProps) => (
    <div
        data-testid="ArticleDetailsBlockText"
        className={classNames(classes.ArticleDetailsBlockText, {}, [className])}
    >
        {block.title && <h3>{block.title}</h3>}
        {block.paragraphs.map((paragraph) => <AppText key={paragraph} text={paragraph} className={classes.paragraph} />)}
    </div>
));

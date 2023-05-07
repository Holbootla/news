import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ArticleDetailsBlockText.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { AppText } from '@/shared/ui/AppText/AppText';

interface ArticleDetailsBlockTextProps {
    className?:string;
    block:ArticleTextBlock
}

export const ArticleDetailsBlockText = memo(({ className, block }:ArticleDetailsBlockTextProps) => {
    const { t } = useTranslation();
    return (
        <div
            data-testid="ArticleDetailsBlockText"
        >
            {block.title && <h2>{block.title}</h2>}
            {block.paragraphs.map((paragraph) => <AppText key={paragraph} text={paragraph} className={classes.paragraph} />)}
        </div>
    );
});

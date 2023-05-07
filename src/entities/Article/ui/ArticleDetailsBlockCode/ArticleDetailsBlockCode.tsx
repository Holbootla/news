import { memo } from 'react';
import { classNames } from '@/shared/lib';
import { ArticleCodeBlock } from '../../model/types/article';
import { AppCode } from '@/shared/ui';

interface ArticleDetailsBlockCodeProps {
    className?:string;
    block:ArticleCodeBlock
}

export const ArticleDetailsBlockCode = memo(({ className, block }:ArticleDetailsBlockCodeProps) => (
    <div
        data-testid="ArticleDetailsBlockCode"
        className={classNames('', {}, [className])}
    >
        <AppCode text={block.code} />
    </div>
));

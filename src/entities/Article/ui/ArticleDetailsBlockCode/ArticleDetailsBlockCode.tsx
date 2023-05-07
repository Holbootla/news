import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleCodeBlock } from '../../model/types/article';
import { AppCode } from '@/shared/ui';

interface ArticleDetailsBlockCodeProps {
    className?:string;
    block:ArticleCodeBlock
}

export const ArticleDetailsBlockCode = memo(({ className, block }:ArticleDetailsBlockCodeProps) => {
    const { t } = useTranslation();

    return (
        <div
            data-testid="ArticleDetailsBlockCode"
        >
            <AppCode text={block.code} />
        </div>
    );
});

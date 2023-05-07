import { useCallback } from 'react';
import { classNames } from '@/shared/lib';
import classes from './AppCode.module.scss';
import { AppButton, Icon } from '@/shared/ui';
import CopyIcon from '@/shared/assets/icons/copy-icon.svg';

interface AppCodeProps {
    className?:string;
    text?:string;
}

export const AppCode = ({ className, text }:AppCodeProps) => {
    const copyCode = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre
            data-testid="AppCode"
            className={classNames(classes.AppCode, {}, [className])}
        >
            <AppButton
                variant="secondary"
                className={classes['copy-btn']}
                onClick={copyCode}
            >
                <Icon Svg={CopyIcon} size="s" />
            </AppButton>
            <code>
                {text}
            </code>
        </pre>
    );
};

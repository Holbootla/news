import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import classes from './AddCommentForm.module.scss';
import { AppButton, AppInput } from '@/shared/ui';
import { AppText, AppTextVariants } from '@/shared/ui/AppText/AppText';

export interface AddCommentFormProps {
    className?:string;
    onSendComment:(text:string)=>void;
    error?:string;
    isLoading?:boolean;
}

const AddCommentForm = memo(({
    className, onSendComment, error, isLoading,
}:AddCommentFormProps) => {
    const { t } = useTranslation();

    const [text, setText] = useState<string>('');

    const onSendHandler = useCallback(() => {
        setText('');
        onSendComment(text);
    }, [onSendComment, text]);

    return (
        <div className={classNames(classes.AddCommentForm, {}, [className])}>
            {error && <AppText variant={AppTextVariants.CRITICAL} text={t('addCommentError')} />}
            <AppInput
                type="text"
                value={text}
                onChange={setText}
                placeholder={t('typeYourCommentHere')}
                wide
            />
            <AppButton
                onClick={onSendHandler}
                disabled={isLoading}
            >
                {t('send')}
            </AppButton>
        </div>
    );
});

export default AddCommentForm;

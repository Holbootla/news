import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import classes from './LoginForm.module.scss';
import { AppButton, AppInput } from '@/shared/ui';

interface LoginFormProps {
    className?:string;
}

export const LoginForm:FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onChangeUsername = (value:string) => {
        setUsername(value);
    };

    const onChangePassword = (value:string) => {
        setPassword(value);
    };

    return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
            <AppInput type="text" value={username} onChange={onChangeUsername} placeholder={t('name')} wide autoFocus />
            <AppInput type="password" value={password} onChange={onChangePassword} placeholder={t('password')} wide />
            <AppButton
                className={classes['login-btn']}
            >
                {t('signIn')}
            </AppButton>
        </div>
    );
};

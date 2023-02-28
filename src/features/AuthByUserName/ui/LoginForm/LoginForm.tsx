import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import classes from './LoginForm.module.scss';
import { AppButton, AppInput } from '@/shared/ui';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { AppText, AppTextVariants } from '@/shared/ui/AppText/AppText';

interface LoginFormProps {
    className?:string;
}

export const LoginForm = memo(({ className }:LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLogin = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
            {error && <AppText variant={AppTextVariants.CRITICAL} text={t('incorrectAuthData')} />}
            <AppInput
                type="text"
                value={username}
                onChange={onChangeUsername}
                placeholder={t('name')}
                wide
                autoFocus
            />
            <AppInput
                type="password"
                value={password}
                onChange={onChangePassword}
                placeholder={t('password')}
                wide
            />
            <AppButton
                className={classes['login-btn']}
                onClick={onLogin}
                disabled={isLoading}
            >
                {t('signIn')}
            </AppButton>
        </div>
    );
});

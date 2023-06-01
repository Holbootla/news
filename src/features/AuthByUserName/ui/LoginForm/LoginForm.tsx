import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    classNames, ReducersList, useAppDispatch, useDynamicReducerLoading,
} from '@/shared/lib';
import classes from './LoginForm.module.scss';
import { AppButton, AppInput } from '@/shared/ui';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { AppText, AppTextVariants } from '@/shared/ui/AppText/AppText';

interface LoginFormProps {
    className?:string;
    onSuccess?:()=>void;
}

const initialReducers:ReducersList = {
    login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }:LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    useDynamicReducerLoading({ reducers: initialReducers, removeAfterUnmount: true });

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

    const onLogin = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
            {error && <AppText variant={AppTextVariants.CRITICAL} text={t('incorrectAuthData')} />}
            <AppInput
                type="text"
                value={username}
                onChange={onChangeUsername}
                label={t('name')}
                wide
                autoFocus
            />
            <AppInput
                type="password"
                value={password}
                onChange={onChangePassword}
                label={t('password')}
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

export default LoginForm;

import { FormEvent, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, Input, Logo } from '@/shared/ui';
import {
    selectLoginFormErrorMessage,
    selectLoginFormIsLoading,
} from '../../model/selectors/loginSelectors';
import { loginUser } from '../../model/services/loginUser';
import s from './LoginForm.module.scss';

const LoginFormComponent = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(selectLoginFormIsLoading);
    const errorMessage = useSelector(selectLoginFormErrorMessage);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    };

    const handleChangeUsername = useCallback((value: string) => {
        setUsername(value);
    }, []);

    const handleChangePassword = useCallback((value: string) => {
        setPassword(value);
    }, []);

    const handleLoginClick = useCallback(() => {
        if (username.trim() && password.trim()) {
            dispatch(loginUser({ username, password }));
        }
    }, [dispatch, password, username]);

    return (
        <div className={s.loginWrapper}>
            <Logo className={s.logo} isLink={false} />
            <form className={s.loginForm} onSubmit={handleSubmit}>
                <Input
                    value={username}
                    onChange={handleChangeUsername}
                    placeholder={t('Username')}
                />
                <Input
                    value={password}
                    onChange={handleChangePassword}
                    placeholder={t('Password')}
                    type='password'
                />
                {errorMessage && <span className={s.loginError}>{errorMessage}</span>}
                <Button
                    onClick={handleLoginClick}
                    theme='blue'
                    disabled={isLoading}
                    className={s.loginBtn}
                >
                    {t('Sign in')}
                </Button>
            </form>
        </div>
    );
};

export const LoginForm = memo(LoginFormComponent);

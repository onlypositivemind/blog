import { FormEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, Input, Logo } from '@/shared/ui';
import {
    selectLoginFormErrorMessage,
    selectLoginFormIsLoading,
} from '../../model/selectors/loginSelectors';
import { loginUser } from '../../model/services/loginUser';
import { loginReducer } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';

const reducers: ReducersList = { loginForm: loginReducer };

interface LoginFormProps {
    onCloseModal: () => void;
}

const LoginForm = ({ onCloseModal }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(selectLoginFormIsLoading);
    const errorMessage = useSelector(selectLoginFormErrorMessage);
    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('password');

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    };

    const handleChangeUsername = useCallback((value: string) => {
        setUsername(value);
    }, []);

    const handleChangePassword = useCallback((value: string) => {
        setPassword(value);
    }, []);

    const handleLoginClick = useCallback(async () => {
        if (!username.trim() && !password.trim()) {
            return;
        }

        const res = await dispatch(loginUser({ username, password }));
        if (res.meta.requestStatus === 'fulfilled') {
            onCloseModal();
        }
    }, [dispatch, onCloseModal, password, username]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={s.loginWrapper}>
                <Logo className={s.logo} isLink={false} />
                <form
                    onSubmit={handleSubmit}
                    className={s.loginForm}
                    aria-describedby={'login-error-message'}
                >
                    <Input
                        value={username}
                        onChange={handleChangeUsername}
                        label={t('Username')}
                        autoComplete='username'
                    />
                    <Input
                        value={password}
                        onChange={handleChangePassword}
                        label={t('Password')}
                        type='password'
                        autoComplete='current-password'
                    />
                    {errorMessage && (
                        <span
                            className={s.loginError}
                            id='login-error-message'
                            aria-live='assertive'
                        >
                            {errorMessage}
                        </span>
                    )}
                    <Button
                        type='submit'
                        theme='blue'
                        onClick={handleLoginClick}
                        disabled={isLoading}
                        className={s.loginBtn}
                    >
                        {t('Sign in')}
                    </Button>
                </form>
            </div>
        </DynamicModuleLoader>
    );
};

export default LoginForm;

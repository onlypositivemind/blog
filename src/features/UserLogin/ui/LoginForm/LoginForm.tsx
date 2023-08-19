import { FormEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input } from '@/shared/ui';
import s from './LoginForm.module.scss';

export const LoginForm = () => {
    const { t } = useTranslation();
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

    return (
        <form className={s.loginForm} onSubmit={handleSubmit}>
            <Input
                value={username}
                onChange={handleChangeUsername}
                placeholder={t('Username')}
                autoFocus
            />
            <Input
                value={password}
                onChange={handleChangePassword}
                placeholder={t('Password')}
                type='password'
            />
            <Button theme='blue' className={s.loginBtn}>
                {t('Sign in')}
            </Button>
        </form>
    );
};

import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, FormInput, Logo } from '@/shared/ui';
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

interface FormValues {
    username: string;
    password: string;
}

const LoginForm = ({ onCloseModal }: LoginFormProps) => {
    const { t } = useTranslation('login');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ mode: 'onSubmit' });

    const dispatch = useAppDispatch();
    const isLoading = useSelector(selectLoginFormIsLoading);
    const errorMessage = useSelector(selectLoginFormErrorMessage);

    const onSubmit = async (formValues: FormValues) => {
        const { username, password } = formValues;

        const res = await dispatch(loginUser({ username, password }));
        if (res.meta.requestStatus === 'fulfilled') {
            onCloseModal();
        }
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cn(s.loginWrapper, { [s.loading]: isLoading })}>
                <Logo className={s.logo} isLink={false} />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={s.loginForm}
                    aria-describedby={'login-error-message'}
                >
                    <FormInput
                        type='text'
                        placeholder={t('Username')}
                        autoComplete='username'
                        disabled={isLoading}
                        errorMessage={errors.username?.message}
                        ariaDescribedby='username-error-message'
                        {...register('username', {
                            required: t('Required'),
                        })}
                    />
                    <FormInput
                        type='password'
                        placeholder={t('Password')}
                        autoComplete='current-password'
                        disabled={isLoading}
                        errorMessage={errors.password?.message}
                        ariaDescribedby='password-error-message'
                        {...register('password', {
                            required: t('Required'),
                        })}
                    />
                    <Button type='submit' theme='blue' disabled={isLoading} className={s.loginBtn}>
                        {t('Sign in')}
                    </Button>
                    {errorMessage && (
                        <span
                            className={s.loginError}
                            id='login-error-message'
                            aria-live='assertive'
                        >
                            {t(errorMessage)}
                        </span>
                    )}
                </form>
                <p className={s.signUp}>{t('Sign Up')}</p>
            </div>
        </DynamicModuleLoader>
    );
};

export default LoginForm;

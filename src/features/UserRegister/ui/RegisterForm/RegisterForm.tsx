import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { registerUser } from '@/features/UserRegister/model/services/registerUser';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, FormInput, Logo } from '@/shared/ui';
import {
    selectRegisterFormErrorMessage,
    selectRegisterFormIsLoading,
} from '../../model/selectors/registerSelectors';
import { registerReducer } from '../../model/slice/registerSlice';
import s from './RegisterForm.module.scss';

interface RegisterFormProps {
    onCloseModal: () => void;
}

interface FormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const reducers: ReducersList = { registerForm: registerReducer };

const RegisterForm = ({ onCloseModal }: RegisterFormProps) => {
    const { t } = useTranslation('register');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ mode: 'onSubmit' });

    const dispatch = useAppDispatch();
    const isLoading = useSelector(selectRegisterFormIsLoading);
    const errorMessage = useSelector(selectRegisterFormErrorMessage);

    const onSubmit = async (formValues: FormValues) => {
        const { username, password, email } = formValues;

        const res = await dispatch(registerUser({ username, email, password }));
        if (res.meta.requestStatus === 'fulfilled') {
            onCloseModal();
        }
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cn(s.registerWrapper, { [s.loading]: isLoading })}>
                <Logo className={s.logo} isLink={false} />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    aria-describedby='register-error-message'
                    className={s.registerForm}
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
                            minLength: { value: 3, message: t('Username min length') },
                            maxLength: { value: 20, message: t('Username max length') },
                        })}
                    />
                    <FormInput
                        type='email'
                        placeholder={t('Email')}
                        autoComplete='email'
                        disabled={isLoading}
                        errorMessage={errors.email?.message}
                        ariaDescribedby='email-error-message'
                        {...register('email', {
                            required: t('Required'),
                        })}
                    />
                    <FormInput
                        type='password'
                        placeholder={t('Password')}
                        autoComplete='new-password'
                        disabled={isLoading}
                        errorMessage={errors.password?.message}
                        ariaDescribedby='password-error-message'
                        {...register('password', {
                            required: t('Required password'),
                            minLength: { value: 8, message: t('Password min length') },
                        })}
                    />
                    <FormInput
                        type='password'
                        placeholder={t('Confirm password')}
                        autoComplete='new-password'
                        disabled={isLoading}
                        errorMessage={errors.confirmPassword?.message}
                        ariaDescribedby='confirm-password-error-message'
                        {...register('confirmPassword', {
                            required: t('Required confirm password'),
                            validate: (value, formValues) => {
                                if (value !== formValues.password) {
                                    return t('Passwords not match');
                                }
                            },
                        })}
                    />
                    {errorMessage && (
                        <span
                            className={s.registerError}
                            id='register-error-message'
                            aria-live='assertive'
                        >
                            {t(errorMessage)}
                        </span>
                    )}
                    <Button type='submit' theme='blue' className={s.registerBtn}>
                        {t('Sign up')}
                    </Button>
                </form>
                <div className={s.signInBlock}>
                    <p>{t('Have an account?')}</p>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <p>{t('Sign in')}</p>
                </div>
            </div>
        </DynamicModuleLoader>
    );
};

export default RegisterForm;
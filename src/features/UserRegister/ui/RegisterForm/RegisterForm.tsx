import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, FormInput, Logo } from '@/shared/ui';
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

const RegisterForm = ({ onCloseModal }: RegisterFormProps) => {
    const { t } = useTranslation('register');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ mode: 'onSubmit' });

    const onSubmit = async (formValues: FormValues) => {
        const { username, password, email } = formValues;

        // eslint-disable-next-line no-console
        console.log(username, password, email);
    };

    return (
        <div className={cn(s.registerWrapper, { [s.loading]: false })}>
            <Logo className={s.logo} isLink={false} />
            <form onSubmit={handleSubmit(onSubmit)} className={s.registerForm}>
                <FormInput
                    type='text'
                    placeholder={t('Username')}
                    autoComplete='username'
                    disabled={false}
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
                    disabled={false}
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
                    disabled={false}
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
                    disabled={false}
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
    );
};

export default RegisterForm;

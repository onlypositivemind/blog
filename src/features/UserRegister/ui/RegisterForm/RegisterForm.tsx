import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { I18nNamespace } from '@/shared/const';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button, FormInput, HStack, Logo } from '@/shared/ui';
import {
    selectRegisterFormErrorMessage,
    selectRegisterFormIsLoading,
} from '../../model/selectors/registerSelectors';
import { registerUser } from '../../model/services/registerUser';
import { registerReducer } from '../../model/slice/registerSlice';
import s from './RegisterForm.module.scss';

interface RegisterFormProps {
    onCloseModal: () => void;
    onChangeModalView: () => void;
}

interface FormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const reducers: ReducersList = { registerForm: registerReducer };

const RegisterForm = ({ onCloseModal, onChangeModalView }: RegisterFormProps) => {
    const { t } = useTranslation([I18nNamespace.REGISTER, I18nNamespace.BASE]);
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
            <div className={cn('authFormWrapper', { loading: isLoading })}>
                <Logo className={'authFormLogo'} isLink={false} />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    aria-describedby='register-error-message'
                    className={'authForm'}
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
                            minLength: { value: 3, message: t('UsernameMinLength') },
                            maxLength: { value: 20, message: t('UsernameMaxLength') },
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
                            required: t('RequiredPassword'),
                            minLength: { value: 8, message: t('PasswordMinLength') },
                        })}
                    />
                    <FormInput
                        type='password'
                        placeholder={t('ConfirmPassword')}
                        autoComplete='new-password'
                        disabled={isLoading}
                        errorMessage={errors.confirmPassword?.message}
                        ariaDescribedby='confirm-password-error-message'
                        {...register('confirmPassword', {
                            required: t('RequiredConfirmPassword'),
                            validate: (value, formValues) => {
                                if (value !== formValues.password) {
                                    return t('PasswordsNotMatch');
                                }
                            },
                        })}
                    />
                    <Button
                        type='submit'
                        theme='blue'
                        disabled={isLoading}
                        className={'authButton'}
                    >
                        {t('SignUp', { ns: I18nNamespace.BASE })}
                    </Button>
                    {errorMessage && (
                        <span
                            className={'authError'}
                            id='register-error-message'
                            aria-live='assertive'
                        >
                            {t(errorMessage)}
                        </span>
                    )}
                </form>
                <HStack align='center' justify='center' gap={8} className={s.signInBlock}>
                    <p>{t('HaveAccount')}</p>
                    <Button onClick={onChangeModalView} disabled={isLoading}>
                        {t('SignIn', { ns: I18nNamespace.BASE })}
                    </Button>
                </HStack>
            </div>
        </DynamicModuleLoader>
    );
};

export default RegisterForm;

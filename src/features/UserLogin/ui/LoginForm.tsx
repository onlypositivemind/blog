import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { I18nNamespace } from '@/shared/consts';
import type { ReducersList } from '@/shared/lib/components';
import { DynamicModuleLoader } from '@/shared/lib/components';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button, FormInput, Logo } from '@/shared/ui';
import { loginUser } from '../api/loginUser';
import { selectLoginFormErrorMessage, selectLoginFormIsLoading } from '../model/selectors';
import { loginReducer } from '../model/slice';
import s from './LoginForm.module.scss';

interface LoginFormProps {
    onCloseModal: () => void;
    onChangeModalView: () => void;
}

interface FormValues {
    username: string;
    password: string;
}

const reducers: ReducersList = { loginForm: loginReducer };

const LoginForm = ({ onCloseModal, onChangeModalView }: LoginFormProps) => {
    const { t } = useTranslation([I18nNamespace.LOGIN, I18nNamespace.COMMON]);
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
            <div className={cn('authFormWrapper', { loading: isLoading })}>
                <Logo className={'authFormLogo'} isLink={false} />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    aria-describedby='login-error-message'
                    className={'authForm'}
                >
                    <FormInput
                        type='text'
                        placeholder={t('Username')}
                        autoComplete='username'
                        disabled={isLoading}
                        errorMessage={errors.username?.message}
                        ariaDescribedby='username-error-message'
                        defaultValue='admin' // TODO убрать, когда будет готов сервер
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
                        defaultValue='asdasdasd' // TODO убрать, когда будет готов сервер
                        {...register('password', {
                            required: t('Required'),
                        })}
                    />
                    <Button type='submit' theme='blue' disabled={isLoading} className='authButton'>
                        {t('SignIn', { ns: I18nNamespace.COMMON })}
                    </Button>
                    {errorMessage && (
                        <span className='authError' id='login-error-message' aria-live='assertive'>
                            {t(errorMessage)}
                        </span>
                    )}
                </form>
                <Button onClick={onChangeModalView} disabled={isLoading} className={s.signUp}>
                    {t('SignUp', { ns: I18nNamespace.COMMON })}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default LoginForm;

import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { I18nNamespace } from '@/shared/const/translations';
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
    const { t } = useTranslation([I18nNamespace.REGISTER, I18nNamespace.LOGIN, I18nNamespace.BASE]);
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
                    <Button type='submit' theme='blue' disabled={isLoading} className='authButton'>
                        {t('Sign In', { ns: I18nNamespace.BASE })}
                    </Button>
                    {errorMessage && (
                        <span className='authError' id='login-error-message' aria-live='assertive'>
                            {t(errorMessage, { ns: I18nNamespace.LOGIN })}
                        </span>
                    )}
                </form>
                <Button onClick={onChangeModalView} disabled={isLoading} className={s.signUp}>
                    {t('Sign Up', { ns: I18nNamespace.BASE })}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default LoginForm;

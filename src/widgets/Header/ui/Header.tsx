import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { logoutUser, selectUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/UserLogin';
import { RegisterModal } from '@/features/UserRegister';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, Logo } from '@/shared/ui';
import s from './Header.module.scss';

export const Header = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(selectUserAuthData);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    const handleOpeningLoginModal = useCallback(() => {
        setIsLoginModalOpen(true);
    }, []);

    const handleClosingLoginModal = useCallback(() => {
        setIsLoginModalOpen(false);
    }, []);

    const handleOpeningRegisterModal = useCallback(() => {
        setIsRegisterModalOpen(true);
    }, []);

    const handleClosingRegisterModal = useCallback(() => {
        setIsRegisterModalOpen(false);
    }, []);

    const handleClickLogout = useCallback(() => {
        dispatch(logoutUser());
    }, [dispatch]);

    return (
        <header className={s.header}>
            <Logo theme='white' />
            <div className={s.right}>
                {authData ? (
                    <Button onClick={handleClickLogout} theme='clear_white'>
                        {t('Sign out')}
                    </Button>
                ) : (
                    <div className={s.authButtons}>
                        <Button onClick={handleOpeningRegisterModal} theme='clear_white'>
                            {t('Register')}
                        </Button>
                        <p>{t('or')}</p>
                        <Button onClick={handleOpeningLoginModal} theme='clear_white'>
                            {t('Sign in')}
                        </Button>
                    </div>
                )}
            </div>
            {isLoginModalOpen && (
                <LoginModal isOpen={isLoginModalOpen} onCloseModal={handleClosingLoginModal} />
            )}
            {isRegisterModalOpen && (
                <RegisterModal
                    isOpen={isRegisterModalOpen}
                    onCloseModal={handleClosingRegisterModal}
                />
            )}
        </header>
    );
};

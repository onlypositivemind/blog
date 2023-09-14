import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { logoutUser, selectUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/UserLogin';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, Logo } from '@/shared/ui';
import s from './Header.module.scss';

export const Header = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(selectUserAuthData);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleOpeningLoginModal = useCallback(() => {
        setIsLoginModalOpen(true);
    }, []);

    const handleClosingLoginModal = useCallback(() => {
        setIsLoginModalOpen(false);
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
                    <>
                        <Button onClick={handleOpeningLoginModal} theme='outlined_white'>
                            {t('Log in')}
                        </Button>
                        <Button theme='outlined_white'>{t('Join')}</Button>
                    </>
                )}
            </div>
            {isLoginModalOpen && (
                <LoginModal isOpen={isLoginModalOpen} onCloseModal={handleClosingLoginModal} />
            )}
        </header>
    );
};

import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { logoutUser, selectUserAuthData } from '@/entities/User';
import type { AuthModalView } from '@/widgets/AuthModal';
import { AuthModal } from '@/widgets/AuthModal';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button, HStack, Logo } from '@/shared/ui';
import s from './Header.module.scss';

export const Header = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(selectUserAuthData);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState<AuthModalView>(null);

    const handleOpeningAuthModal = useCallback(
        (currentModal: AuthModalView) => () => {
            setCurrentModal(currentModal);
            setIsAuthModalOpen(true);
        },
        [],
    );

    const handleClosingAuthModal = useCallback(() => {
        setIsAuthModalOpen(false);
        setCurrentModal(null);
    }, []);

    const handleChangeModalView = useCallback(() => {
        setCurrentModal((prev) => (prev === 'login' ? 'register' : 'login'));
    }, []);

    const handleClickLogout = useCallback(() => {
        dispatch(logoutUser());
    }, []);

    return (
        <HStack as='header' align='center' justify='between' className={s.header}>
            <Logo theme='white' />
            {authData ? (
                <Button onClick={handleClickLogout} theme='clear_white'>
                    {t('SignOut')}
                </Button>
            ) : (
                <HStack align='center' gap={12} className={s.authButtons}>
                    <Button onClick={handleOpeningAuthModal('register')} theme='clear_white'>
                        {t('Register')}
                    </Button>
                    <p>{t('or')}</p>
                    <Button onClick={handleOpeningAuthModal('login')} theme='clear_white'>
                        {t('SignIn')}
                    </Button>
                </HStack>
            )}
            {isAuthModalOpen && (
                <AuthModal
                    isOpen={isAuthModalOpen}
                    onCloseModal={handleClosingAuthModal}
                    currentModal={currentModal}
                    onChangeModalView={handleChangeModalView}
                />
            )}
        </HStack>
    );
};

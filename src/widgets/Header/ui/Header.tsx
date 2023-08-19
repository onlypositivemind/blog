import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@/features/UserLogin';
import { Button, Logo } from '@/shared/ui';
import s from './Header.module.scss';

const HeaderComponent = () => {
    const { t } = useTranslation();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleOpeningLoginModal = useCallback(() => {
        setIsLoginModalOpen(true);
    }, []);

    const handleClosingLoginModal = useCallback(() => {
        setIsLoginModalOpen(false);
    }, []);

    return (
        <header className={s.header}>
            <Logo theme='white' />
            <div className={s.right}>
                <Button theme='outlined_white' onClick={handleOpeningLoginModal}>
                    {t('Log in')}
                </Button>
                <Button theme='outlined_white'>{t('Join')}</Button>
            </div>
            <LoginModal isOpen={isLoginModalOpen} onCloseModal={handleClosingLoginModal} />
        </header>
    );
};

export const Header = memo(HeaderComponent);

import { memo } from 'react';
import { Button } from '@/shared/ui/Button';
import { Logo } from '@/shared/ui/Logo';
import s from './Header.module.scss';
import { useTranslation } from 'react-i18next';

const HeaderComponent = () => {
    const { t } = useTranslation();

    return (
        <header className={s.header}>
            <Logo theme='white' />
            <div className={s.right}>
                <Button theme='outlined_white'>{t('Log in')}</Button>
                <Button theme='outlined_white'>{t('Join')}</Button>
            </div>
        </header>
    );
};

export const Header = memo(HeaderComponent);

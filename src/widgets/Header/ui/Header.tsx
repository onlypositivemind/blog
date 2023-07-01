import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Logo } from '@/shared/ui';
import s from './Header.module.scss';

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

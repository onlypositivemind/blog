import { memo } from 'react';
import { Button } from '@/shared/ui/Button';
import { Logo } from '@/shared/ui/Logo';
import s from './Header.module.scss';

const HeaderComponent = () => {
    return (
        <header className={s.header}>
            <Logo theme='inverted' />
            <div className={s.right}>
                <Button theme='outlined_inverted'>Log in</Button>
                <Button theme='outlined_inverted'>Join</Button>
            </div>
        </header>
    );
};

export const Header = memo(HeaderComponent);

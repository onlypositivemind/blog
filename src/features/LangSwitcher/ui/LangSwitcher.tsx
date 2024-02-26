import cn from 'classnames';
import { memo } from 'react';
import { useLanguage } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui';
import EnFlagIcon from '@/shared/assets/icons/flag-en.svg';
import RuFlagIcon from '@/shared/assets/icons/flag-ru.svg';
import s from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcherComponent = ({ className }: LangSwitcherProps) => {
    const { activeLanguage, toggleLanguage } = useLanguage();

    const LangIcon = activeLanguage === 'ru' ? EnFlagIcon : RuFlagIcon;

    return (
        <Button
            size='2xl'
            theme='clear'
            onClick={toggleLanguage}
            className={cn(s.toggleBtn, className)}
        >
            <LangIcon />
        </Button>
    );
};

export const LangSwitcher = memo(LangSwitcherComponent);

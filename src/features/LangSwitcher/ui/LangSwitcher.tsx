import cn from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';
import EnFlagIcon from '@/shared/assets/icons/flag-en.svg';
import RuFlagIcon from '@/shared/assets/icons/flag-ru.svg';
import s from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcherComponent = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();
    const isRuLangActive = i18n.language === 'ru';
    const LangIcon = isRuLangActive ? EnFlagIcon : RuFlagIcon;

    const toggle = () => {
        i18n.changeLanguage(isRuLangActive ? 'en' : 'ru');
    };

    return (
        <Button onClick={toggle} className={cn(s.toggleBtn, className)} theme='clear'>
            <LangIcon />
        </Button>
    );
};

export const LangSwitcher = memo(LangSwitcherComponent);

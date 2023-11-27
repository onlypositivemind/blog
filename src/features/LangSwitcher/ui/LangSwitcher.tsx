import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';
import EnFlagIcon from '@/shared/assets/icons/flag-en.svg';
import RuFlagIcon from '@/shared/assets/icons/flag-ru.svg';

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

    // TODO добавить стили, чтобы были базовые единые
    return (
        <Button onClick={toggle} className={className} theme='clear' size='size_h3'>
            <LangIcon />
        </Button>
    );
};

export const LangSwitcher = memo(LangSwitcherComponent);

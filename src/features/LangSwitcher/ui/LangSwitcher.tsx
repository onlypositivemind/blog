import { memo, useCallback } from 'react';
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

    const toggle = useCallback(() => {
        i18n.changeLanguage(isRuLangActive ? 'en' : 'ru');
    }, [i18n, isRuLangActive]);

    return (
        <Button onClick={toggle} className={className} theme='clear' size='size_h3'>
            {isRuLangActive ? <RuFlagIcon /> : <EnFlagIcon />}
        </Button>
    );
};

export const LangSwitcher = memo(LangSwitcherComponent);

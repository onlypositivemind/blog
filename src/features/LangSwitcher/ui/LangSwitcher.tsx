import { memo } from 'react';
import s from './LangSwitcher.module.scss';
import cn from 'classnames';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcherComponent = (props: LangSwitcherProps) => {
    const { className } = props;
    const { i18n } = useTranslation();
    const lang = i18n.language;

    const toggle = () => {
        i18n.changeLanguage(lang === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={toggle}
            className={cn(s.langBtn, className)}
            theme='clear'
            size='size_h3'
        >
            {lang}
        </Button>
    );
};

export const LangSwitcher = memo(LangSwitcherComponent);

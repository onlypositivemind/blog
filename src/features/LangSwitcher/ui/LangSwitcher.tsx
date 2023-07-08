import cn from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';
import s from './LangSwitcher.module.scss';

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
        <Button onClick={toggle} className={cn(s.langBtn, className)} theme='clear' size='size_h3'>
            {lang}
        </Button>
    );
};

export const LangSwitcher = memo(LangSwitcherComponent);

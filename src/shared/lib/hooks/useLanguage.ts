import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nLanguage } from '../../consts';
import type { Language } from '../../types';

interface UseLanguageResult {
    currentLanguage: Language;
    toggleLanguage: () => void;
}

export const useLanguage = (): UseLanguageResult => {
    const { i18n } = useTranslation();

    const toggleLanguage = useCallback(() => {
        i18n.changeLanguage(i18n.language === I18nLanguage.RU ? I18nLanguage.EN : I18nLanguage.RU);
    }, [i18n]);

    return { currentLanguage: i18n.language as Language, toggleLanguage };
};

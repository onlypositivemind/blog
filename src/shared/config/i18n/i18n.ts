import { use } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: false,
    debug: false,
});

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: false,
    ns: ['translationsNS'],
    defaultNS: 'translationsNS',
    debug: true,
    resources: { ru: { translations: {} } },
});

export default i18n;

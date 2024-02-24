const I18nLanguage = {
    EN: 'en',
    RU: 'ru',
} as const;

const I18nNamespace = {
    ARTICLE: 'article',
    COMMENTS: 'comments',
    COMMON: 'translation',
    LOGIN: 'login',
    PROFILE: 'profile',
    REGISTER: 'register',
} as const;

export { I18nLanguage, I18nNamespace };

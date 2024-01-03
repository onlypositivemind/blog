export const UserValidation = {
    EMAIL_REGEXP: /.{1,35}@.{2,10}\..{2,5}/,
    LINK_REGEXP: /^(https?:\/\/).{3,}$/,
    NAME_REGEXP: /^[a-zA-Zа-яА-Я]+$/,
    USERNAME_MAX_LENGTH: 20,
    USERNAME_MIN_LENGTH: 3,
    USER_PASSWORD_MIN_LENGTH: 8,
} as const;

export const UserValidation = {
    AVATAR_LINK_REGEXP: /^(https?:\/\/).{3,}$/,
    EMAIL_REGEXP: /.{1,35}@.{2,10}\..{2,5}/,
    NAME_REGEXP: /^[a-zA-Zа-яА-Я]+$/,
    PASSWORD_MIN_LENGTH: 8,
    USERNAME_MAX_LENGTH: 20,
    USERNAME_MIN_LENGTH: 3,
} as const;

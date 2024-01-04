import { Profile } from '@/entities/Profile';
import { UserValidation } from '@/shared/const';
import { validateProfileError } from '../const/validateProfile';
import { ValidateProfileErrors } from '../types/validateProfile';

export const validateProfile = (profile: Profile) => {
    const { email, username, avatar, firstname, lastname, age } = profile;

    const errors: ValidateProfileErrors = [];

    if (!UserValidation.EMAIL_REGEXP.test(email!)) {
        errors.push(validateProfileError.EMAIL);
    }

    if ((username?.length || 0) < UserValidation.USERNAME_MIN_LENGTH) {
        errors.push(validateProfileError.USERNAME);
    }

    if (!UserValidation.AVATAR_LINK_REGEXP.test(avatar!)) {
        errors.push(validateProfileError.AVATAR_LINK);
    }

    if (!UserValidation.NAME_REGEXP.test(firstname!)) {
        errors.push(validateProfileError.FIRSTNAME);
    }

    if (!UserValidation.NAME_REGEXP.test(lastname!)) {
        errors.push(validateProfileError.LASTNAME);
    }

    if (!Number.isInteger(age) || (age || 0) < 17) {
        errors.push(validateProfileError.AGE);
    }

    return errors;
};

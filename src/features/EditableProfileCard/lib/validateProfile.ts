import type { Profile } from '@/entities/Profile';
import type { ValidateProfileErrors } from '@/features/EditableProfileCard/model/types';
import { UserValidation } from '@/shared/consts';
import { ProfileValidationError } from '../model/consts';

export const validateProfile = (profile: Profile) => {
    const { email, username, avatar, firstname, lastname, age } = profile;

    const errors: ValidateProfileErrors = [];

    if (!UserValidation.EMAIL_REGEXP.test(email!)) {
        errors.push(ProfileValidationError.EMAIL);
    }

    if ((username?.length || 0) < UserValidation.USERNAME_MIN_LENGTH) {
        errors.push(ProfileValidationError.USERNAME);
    }

    if (!UserValidation.AVATAR_LINK_REGEXP.test(avatar!)) {
        errors.push(ProfileValidationError.AVATAR_LINK);
    }

    if (!UserValidation.NAME_REGEXP.test(firstname!)) {
        errors.push(ProfileValidationError.FIRSTNAME);
    }

    if (!UserValidation.NAME_REGEXP.test(lastname!)) {
        errors.push(ProfileValidationError.LASTNAME);
    }

    if (!Number.isInteger(age) || (age || 0) < 17) {
        errors.push(ProfileValidationError.AGE);
    }

    return errors;
};

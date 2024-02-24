import { invalidProfileMock, profileMock } from '@/shared/lib/tests/mock';
import { validateProfile } from '../../lib/validateProfile';
import { ProfileValidationError } from '../../model/consts';

describe('validateProfile function', () => {
    it('should return an empty array for a valid profile', () => {
        const errors = validateProfile(profileMock);
        expect(errors).toEqual([]);
    });

    it('should return errors for an invalid profile', () => {
        const errors = validateProfile(invalidProfileMock);

        expect(errors).toEqual([
            ProfileValidationError.EMAIL,
            ProfileValidationError.USERNAME,
            ProfileValidationError.AVATAR_LINK,
            ProfileValidationError.FIRSTNAME,
            ProfileValidationError.LASTNAME,
            ProfileValidationError.AGE,
        ]);
    });

    it('should return an error for an invalid email', () => {
        const invalidEmail = 'invalid-email';
        const errors = validateProfile({ ...profileMock, email: invalidEmail });
        expect(errors).toEqual([ProfileValidationError.EMAIL]);
    });

    it('should return an error for a short username', () => {
        const shortUsername = 'ab';
        const errors = validateProfile({ ...profileMock, username: shortUsername });

        expect(errors).toEqual([ProfileValidationError.USERNAME]);
    });
});

import { mockInvalidProfileData, mockProfileData } from '@/shared/lib/tests/mock';
import { ProfileValidationError } from '../const/profileValidation';
import { validateProfile } from './validateProfile';

describe('validateProfile function', () => {
    it('should return an empty array for a valid profile', () => {
        const errors = validateProfile(mockProfileData);
        expect(errors).toEqual([]);
    });

    it('should return errors for an invalid profile', () => {
        const errors = validateProfile(mockInvalidProfileData);

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
        const errors = validateProfile({ ...mockProfileData, email: invalidEmail });
        expect(errors).toEqual([ProfileValidationError.EMAIL]);
    });

    it('should return an error for a short username', () => {
        const shortUsername = 'ab';
        const errors = validateProfile({ ...mockProfileData, username: shortUsername });

        expect(errors).toEqual([ProfileValidationError.USERNAME]);
    });
});

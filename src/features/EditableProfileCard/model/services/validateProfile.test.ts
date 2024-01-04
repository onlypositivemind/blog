import { mockInvalidProfileData, mockProfileData } from '@/shared/lib/tests';
import { validateProfileError } from '../const/validateProfile';
import { validateProfile } from './validateProfile';

describe('validateProfile function', () => {
    it('should return an empty array for a valid profile', () => {
        const errors = validateProfile(mockProfileData);
        expect(errors).toEqual([]);
    });

    it('should return errors for an invalid profile', () => {
        const errors = validateProfile(mockInvalidProfileData);

        expect(errors).toEqual([
            validateProfileError.EMAIL,
            validateProfileError.USERNAME,
            validateProfileError.AVATAR_LINK,
            validateProfileError.FIRSTNAME,
            validateProfileError.LASTNAME,
            validateProfileError.AGE,
        ]);
    });

    it('should return an error for an invalid email', () => {
        const invalidEmail = 'invalid-email';
        const errors = validateProfile({ ...mockProfileData, email: invalidEmail });
        expect(errors).toEqual([validateProfileError.EMAIL]);
    });

    it('should return an error for a short username', () => {
        const shortUsername = 'ab';
        const errors = validateProfile({ ...mockProfileData, username: shortUsername });

        expect(errors).toEqual([validateProfileError.USERNAME]);
    });
});

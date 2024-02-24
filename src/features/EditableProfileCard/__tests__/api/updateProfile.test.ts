import { TestAsyncThunk } from '@/shared/lib/tests';
import { invalidProfileMock, profileMock } from '@/shared/lib/tests/mock';
import { UPDATE_PROFILE_ERROR_MESSAGE, updateProfile } from '../../api/updateProfile';
import { ProfileValidationError } from '../../model/consts';

describe('editableProfileCard/updateProfile AsyncThunk', () => {
    test('should be fulfilled', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            editableProfileCard: { form: profileMock, data: {} },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileMock }));

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileMock);
    });

    test('should be rejected', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            editableProfileCard: { form: profileMock },
        });
        thunk.api.put.mockReturnValue(Promise.reject());

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(UPDATE_PROFILE_ERROR_MESSAGE);
    });

    test('profile data and form equals, no need update', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            editableProfileCard: { form: profileMock, data: profileMock },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileMock }));

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileMock);
    });

    test('should rejected with validation errors', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            editableProfileCard: { form: invalidProfileMock, data: profileMock },
        });

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ProfileValidationError.EMAIL,
            ProfileValidationError.USERNAME,
            ProfileValidationError.AVATAR_LINK,
            ProfileValidationError.FIRSTNAME,
            ProfileValidationError.LASTNAME,
            ProfileValidationError.AGE,
        ]);
    });
});

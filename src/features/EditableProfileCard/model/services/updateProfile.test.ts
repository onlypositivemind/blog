import { ProfileValidationError } from '@/features/EditableProfileCard/model/const/profileValidation';
import { mockInvalidProfileData, mockProfileData, TestAsyncThunk } from '@/shared/lib/tests';
import { UPDATE_PROFILE_ERROR_MESSAGE, updateProfile } from './updateProfile';

describe('updateProfile AsyncThunk', () => {
    test('should be fulfilled', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            editableProfileCard: { form: mockProfileData, data: {} },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: mockProfileData }));

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockProfileData);
    });

    test('should be rejected', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            editableProfileCard: { form: mockProfileData },
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
            editableProfileCard: { form: mockProfileData, data: mockProfileData },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: mockProfileData }));

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockProfileData);
    });

    test('should rejected with validation errors', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            editableProfileCard: { form: mockInvalidProfileData, data: mockProfileData },
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

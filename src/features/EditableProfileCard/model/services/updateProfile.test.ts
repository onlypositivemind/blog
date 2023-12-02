import { Profile } from '@/entities/Profile';
import { TestAsyncThunk } from '@/shared/lib/tests';
import { UPDATE_PROFILE_ERROR_MESSAGE, updateProfile } from './updateProfile';

export const profileData: Profile = {
    id: '1',
    email: 'admin@gmail.com',
    username: 'admin',
    firstname: 'Evgenii',
    lastname: 'TSovich',
    age: 24,
    currency: 'EUR',
    country: 'Russia',
    avatar: 'https://avatars.githubusercontent.com/u/109303573?v=4',
};

describe('updateProfile AsyncThunk', () => {
    test('should be fulfilled', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            editableProfileCard: { form: profileData, data: {} },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test('should be rejected', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            editableProfileCard: { form: profileData },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 404 }));

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(UPDATE_PROFILE_ERROR_MESSAGE);
    });

    test('profile data and form equals, no need update', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            editableProfileCard: { form: profileData, data: profileData },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });
});

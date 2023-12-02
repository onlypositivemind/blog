import { Profile } from '@/entities/Profile';
import { TestAsyncThunk } from '@/shared/lib/tests';
import { GET_PROFILE_ERROR_MESSAGE, getProfile } from './getProfile';

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

describe('getProfile AsyncThunk', () => {
    test('should be fulfilled', async () => {
        const thunk = new TestAsyncThunk(getProfile);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));

        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test('should be rejected', async () => {
        const thunk = new TestAsyncThunk(getProfile);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 404 }));

        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(GET_PROFILE_ERROR_MESSAGE);
    });
});

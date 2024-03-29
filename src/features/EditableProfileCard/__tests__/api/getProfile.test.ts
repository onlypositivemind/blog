import { TestAsyncThunk } from '@/shared/lib/tests';
import { profileMock } from '@/shared/lib/tests/mock';
import { GET_PROFILE_ERROR_MESSAGE, getProfile } from '../../api/getProfile';

describe('getProfile AsyncThunk', () => {
    test('should be fulfilled', async () => {
        const thunk = new TestAsyncThunk(getProfile);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileMock }));

        const result = await thunk.callThunk('admin');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileMock);
    });

    test('should be rejected', async () => {
        const thunk = new TestAsyncThunk(getProfile);
        thunk.api.get.mockReturnValue(Promise.reject());

        const result = await thunk.callThunk('admin');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(GET_PROFILE_ERROR_MESSAGE);
    });
});

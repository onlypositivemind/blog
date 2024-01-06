import { TestAsyncThunk } from '@/shared/lib/tests';
import { mockProfileData } from '@/shared/lib/tests/mock';
import { GET_PROFILE_ERROR_MESSAGE, getProfile } from './getProfile';

describe('getProfile AsyncThunk', () => {
    test('should be fulfilled', async () => {
        const thunk = new TestAsyncThunk(getProfile);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: mockProfileData }));

        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockProfileData);
    });

    test('should be rejected', async () => {
        const thunk = new TestAsyncThunk(getProfile);
        thunk.api.get.mockReturnValue(Promise.reject());

        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(GET_PROFILE_ERROR_MESSAGE);
    });
});

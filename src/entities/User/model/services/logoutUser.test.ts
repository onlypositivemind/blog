import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests';
import { logoutUser } from './logoutUser';

describe('logoutUser AsyncThunk', () => {
    test('should be fulfilled', async () => {
        const thunk = new TestAsyncThunk(logoutUser);
        thunk.api.post.mockReturnValue(Promise.resolve());

        const result = await thunk.callThunk(undefined);

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.logout());
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('should work with failed response', async () => {
        const thunk = new TestAsyncThunk(logoutUser);
        thunk.api.post.mockReturnValue(Promise.reject());

        const result = await thunk.callThunk(undefined);

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.logout());
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
});

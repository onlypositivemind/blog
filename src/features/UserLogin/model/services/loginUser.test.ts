import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk';
import { AuthResponse } from '@/shared/types/auth';
import { loginUser } from './loginUser';

const loginUserResponse: AuthResponse = {
    accessToken: 'mockedAccessToken',
    user: {
        id: '0',
        email: 'mockedEmail@gmail.com',
        username: 'mockedUsername',
        role: 'USER',
    },
};

const userLoginData = { username: 'admin', password: 'admin' };

describe('loginUserAsyncThunk', () => {
    test('should be fulfilled', async () => {
        const thunk = new TestAsyncThunk(loginUser);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: loginUserResponse }));

        const result = await thunk.callThunk(userLoginData);

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(loginUserResponse));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(loginUserResponse);
    });

    test('should be rejected', async () => {
        const thunk = new TestAsyncThunk(loginUser);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 400 }));

        const result = await thunk.callThunk(userLoginData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Failed log in');
    });
});

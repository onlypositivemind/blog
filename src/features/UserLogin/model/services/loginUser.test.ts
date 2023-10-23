import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests';
import { AuthResponse } from '@/shared/types';
import { loginUser, LoginUserProps } from './loginUser';

const loginUserResponse: AuthResponse = {
    accessToken: 'mockedAccessToken',
    user: {
        id: 1,
        username: 'admin',
        email: 'admin@gmail.com',
        roles: ['SystemAdmin'],
    },
};

const userLoginData: LoginUserProps = { username: 'admin', password: 'admin' };

const errorMessage = 'Log in failed';

describe('loginUser AsyncThunk', () => {
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
        expect(result.payload).toBe(errorMessage);
    });
});

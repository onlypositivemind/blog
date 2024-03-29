import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests';
import { userAuthDataMock } from '@/shared/lib/tests/mock';
import type { AuthResponse } from '@/shared/types';
import type { LoginUserParams } from '../../api/loginUser';
import { LOGIN_USER_ERROR_MESSAGE, loginUser } from '../../api/loginUser';

const loginUserResponse: AuthResponse = {
    accessToken: 'mockedAccessToken',
    user: userAuthDataMock,
};

const userLoginData: LoginUserParams = { username: userAuthDataMock.username, password: 'admin' };

describe('login/loginUser AsyncThunk', () => {
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
        thunk.api.post.mockReturnValue(Promise.reject());

        const result = await thunk.callThunk(userLoginData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(LOGIN_USER_ERROR_MESSAGE);
    });
});

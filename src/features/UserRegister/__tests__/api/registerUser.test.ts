import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests';
import { userAuthDataMock } from '@/shared/lib/tests/mock';
import type { AuthResponse } from '@/shared/types';
import type { RegisterUserParams } from '../../api/registerUser';
import { REGISTER_USER_ERROR_MESSAGE, registerUser } from '../../api/registerUser';

const registerUserResponse: AuthResponse = {
    accessToken: 'mockedAccessToken',
    user: userAuthDataMock,
};

const userRegisterData: RegisterUserParams = {
    username: userAuthDataMock.username,
    email: userAuthDataMock.email,
    password: 'admin',
};

describe('register/registerUser AsyncThunk', () => {
    test('should be fulfilled', async () => {
        const thunk = new TestAsyncThunk(registerUser);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: registerUserResponse }));

        const result = await thunk.callThunk(userRegisterData);

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(registerUserResponse));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(registerUserResponse);
    });

    test('should be rejected', async () => {
        const thunk = new TestAsyncThunk(registerUser);
        thunk.api.post.mockReturnValue(Promise.reject());

        const result = await thunk.callThunk(userRegisterData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(REGISTER_USER_ERROR_MESSAGE);
    });
});

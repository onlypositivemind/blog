import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests';
import { AuthResponse } from '@/shared/types';
import {
    REGISTER_USER_ERROR_MESSAGE,
    registerUser,
    RegisterUserProps,
} from '../../api/registerUser';

const registerUserResponse: AuthResponse = {
    accessToken: 'mockedAccessToken',
    user: {
        id: 1,
        username: 'admin',
        email: 'admin@gmail.com',
        roles: ['SystemAdmin'],
    },
};

const userRegisterData: RegisterUserProps = {
    username: 'admin',
    email: 'admin@gmail.com',
    password: 'admin',
};

describe('registerUser AsyncThunk', () => {
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

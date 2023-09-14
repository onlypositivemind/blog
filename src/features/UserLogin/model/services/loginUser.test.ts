import { userActions } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk';
import { AuthResponse } from '@/shared/types/auth';
import { loginUser } from './loginUser';

const promiseResolveImplementation = () => Promise.resolve({ data: {} });

jest.mock('axios', () => ({
    create: jest.fn(() => ({
        interceptors: {
            request: {
                use: jest.fn(promiseResolveImplementation),
            },
            response: {
                use: jest.fn(promiseResolveImplementation),
            },
        },
        defaults: {
            headers: {
                common: {
                    'Content-Type': '',
                    Authorization: '',
                },
            },
        },
        get: jest.fn(promiseResolveImplementation),
        post: jest.fn(promiseResolveImplementation),
        put: jest.fn(promiseResolveImplementation),
        delete: jest.fn(promiseResolveImplementation),
    })),
}));
const mockedAxios = jest.mocked($api, true);

const mockedLoginUserResponse: AuthResponse = {
    tokens: {
        accessToken: 'mockedAccessToken',
        refreshToken: 'mockedRefreshToken',
    },
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
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: mockedLoginUserResponse }));

        const thunk = new TestAsyncThunk(loginUser);
        const result = await thunk.callThunk(userLoginData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(mockedLoginUserResponse),
        );
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockedLoginUserResponse);
    });

    test('should be rejected', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject({ status: 400 }));

        const thunk = new TestAsyncThunk(loginUser);
        const result = await thunk.callThunk(userLoginData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});

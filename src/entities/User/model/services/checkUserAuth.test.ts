import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';
import { AuthResponse } from '@/shared/types';
import { userActions } from '../slice/userSlice';
import { checkUserAuth } from './checkUserAuth';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export const authResponse: AuthResponse = {
    accessToken: 'mockedAccessToken',
    user: {
        id: 1,
        username: 'admin',
        email: 'admin@gmail.com',
        roles: ['SystemAdmin'],
    },
};

describe('checkUserAuth AsyncThunk', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('should be fulfilled', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: authResponse }));
        const action = checkUserAuth();
        const result = await action(dispatch, getState, undefined);

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(authResponse));
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('should be rejected', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({ status: 400 }));
        const action = checkUserAuth();
        const result = await action(dispatch, getState, undefined);

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
    });
});

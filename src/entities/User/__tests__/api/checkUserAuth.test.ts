import type { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import type { StateSchema } from '@/app/providers/StoreProvider';
import { userAuthDataMock } from '@/shared/lib/tests/mock';
import type { AuthResponse } from '@/shared/types';
import { checkUserAuth } from '../../api/checkUserAuth';
import { userActions } from '../../model/slice';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export const authResponse: AuthResponse = {
    accessToken: 'mockedAccessToken',
    user: userAuthDataMock,
};

describe('user/checkUserAuth AsyncThunk', () => {
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
        mockedAxios.get.mockReturnValue(Promise.reject());
        const action = checkUserAuth();
        const result = await action(dispatch, getState, undefined);

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
    });
});

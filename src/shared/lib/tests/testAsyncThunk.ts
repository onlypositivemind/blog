/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';
import { $api } from '@/shared/api/api';

type ActionCreator<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.spyOn($api, 'post');
jest.spyOn($api, 'put');
jest.spyOn($api, 'get');
jest.spyOn($api, 'delete');
const mockedAxios = jest.mocked($api, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    actionCreator: ActionCreator<Return, Arg, RejectedValue>;
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    api: jest.MockedFunctionDeep<AxiosInstance>;

    constructor(actionCreator: ActionCreator<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.api = mockedAxios;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
        });
        return result;
    }
}

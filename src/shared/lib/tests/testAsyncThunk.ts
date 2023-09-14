/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

type ActionCreator<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    actionCreator: ActionCreator<Return, Arg, RejectedValue>;
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;

    constructor(actionCreator: ActionCreator<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}

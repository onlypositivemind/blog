import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

const state: CounterSchema = {
    value: 7,
};

describe('Counter slice', () => {
    test('Increment action', () => {
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 8 });
    });

    test('Decrement action', () => {
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 6 });
    });

    test('Should work with initialState', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 994 });
    });
});

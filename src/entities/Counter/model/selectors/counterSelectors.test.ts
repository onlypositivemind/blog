import { StateSchema } from '@/app/providers/StoreProvider';
import { selectCounter, selectCounterValue } from './counterSelectors';

const state: DeepPartial<StateSchema> = {
    counter: { value: 7 },
};

describe('Counter selectors', () => {
    test('selectCounter: should return counter state', () => {
        expect(selectCounter(state as StateSchema)).toEqual({ value: 7 });
    });

    test('selectCounterValue: should return counter value', () => {
        expect(selectCounterValue(state as StateSchema)).toBe(7);
    });
});

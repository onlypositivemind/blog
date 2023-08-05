import { StateSchema } from '@/app/providers/StoreProvider';

export const selectCounter = (state: StateSchema) => state.counter;
export const selectCounterValue = (state: StateSchema) => state.counter.value;

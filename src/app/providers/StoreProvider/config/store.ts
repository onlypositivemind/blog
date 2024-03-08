import type { CombinedState, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/axiosInstance';
import { createReducerManager } from './reducerManager';
import type { StateSchema } from './stateSchema';

const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (gDM) => gDM({ thunk: { extraArgument: { api: $api } } }),
    });

    // @ts-ignore TODO types
    store.reducerManager = reducerManager;

    return store;
};

type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export { createReduxStore };
export type { AppDispatch };

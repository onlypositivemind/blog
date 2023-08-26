import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { loginReducer } from '@/features/UserLogin';
import { StateSchema } from './stateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
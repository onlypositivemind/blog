import type { Reducer } from '@reduxjs/toolkit';
import type { ReactNode} from 'react';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import type { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';
import { useAppDispatch } from '../hooks/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    children: ReactNode;
    isRemovedWhenUnmounting?: boolean;
}

export const DynamicModuleLoader = ({
    children,
    reducers,
    isRemovedWhenUnmounting = true,
}: DynamicModuleLoaderProps) => {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];

            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@@INIT ${name} reducer` });
            }
        });

        return () => {
            if (isRemovedWhenUnmounting) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@@REMOVE ${name} reducer` });
                });
            }
        };
    }, []);

    return <>{children}</>;
};

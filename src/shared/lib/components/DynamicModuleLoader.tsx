import { Reducer } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';
import { useAppDispatch } from '../hooks/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    children: ReactNode;
    removeWhenUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeWhenUnmount = true } = props;

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
            if (removeWhenUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@@REMOVE ${name} reducer` });
                });
            }
        };
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);

    return <>{children}</>;
};

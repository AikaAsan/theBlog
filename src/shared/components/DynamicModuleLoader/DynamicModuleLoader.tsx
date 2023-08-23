import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    name: StateSchemaKey;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount = true } = props;
    const dispatch = useDispatch();

    // to fix
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        // const mountedReducers = store.reducerManager.getReducerMap();

        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];

            console.log('mounted', mounted);

            //add new reducer if its not in the list
            // profileReducer is not behaving as expected
            // if (!mounted) {
            //     store.reducerManager.add(name as StateSchemaKey, reducer);
            //     dispatch({ type: `@INIT  ${name} reducer` });
            // }

            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT  ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <>{children}</>;
};
function getReducerMap() {
    throw new Error('Function not implemented.');
}

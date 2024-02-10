import type {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import type { ArticleSchema } from '@/entities/Article';
import type { UserSchema } from '@/entities/User';
import type { EditableProfileCardSchema } from '@/features/EditableProfileCard';
import type { LoginSchema } from '@/features/UserLogin';
import type { RegisterSchema } from '@/features/UserRegister';
import type { ArticlePageSchema } from '@/pages/ArticlePage';

export interface StateSchema {
    user: UserSchema;

    article?: ArticleSchema;
    articlePage?: ArticlePageSchema;
    editableProfileCard?: EditableProfileCardSchema;
    loginForm?: LoginSchema;
    registerForm?: RegisterSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    getMountedReducers: () => MountedReducers;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: { api: AxiosInstance };
    state: StateSchema;
}

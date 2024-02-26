import type { Story } from '@storybook/react';
import type { StateSchema } from '@/app/providers/StoreProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { articleReducer } from '@/entities/Article/model/slice';
import { userReducer } from '@/entities/User';
import { editableProfileCardReducer } from '@/features/EditableProfileCard/model/slice';
import { loginReducer } from '@/features/UserLogin/model/slice';
import { registerReducer } from '@/features/UserRegister/model/slice';
import type { ReducersList } from '@/shared/lib/components';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    registerForm: registerReducer,
    editableProfileCard: editableProfileCardReducer,
    user: userReducer,
    article: articleReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );

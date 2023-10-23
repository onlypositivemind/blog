import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { userReducer } from '@/entities/User';
import { profileCardReducer } from '@/features/EditableProfileCard/model/slice/profileCard';
import { loginReducer } from '@/features/UserLogin/model/slice/loginSlice';
import { registerReducer } from '@/features/UserRegister/model/slice/registerSlice';
import { ReducersList } from '@/shared/lib/components';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    registerForm: registerReducer,
    profileCard: profileCardReducer,
    user: userReducer,
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

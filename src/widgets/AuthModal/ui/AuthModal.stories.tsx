/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator, StoreDecorator } from '@/shared/config/storybook';
import { AuthModal } from './AuthModal';

export default {
    title: 'widgets/AuthModal',
    component: AuthModal,
    args: {
        isOpen: true,
        onCloseModal: () => {},
        currentModal: null,
        onChangeModalView: () => {},
    },
    decorators: [CenterElementDecorator, StoreDecorator({})],
} as ComponentMeta<typeof AuthModal>;

const Template: ComponentStory<typeof AuthModal> = (args) => <AuthModal {...args} />;

export const Login = Template.bind({});
Login.args = { currentModal: 'login' };

export const LoginLoading = Template.bind({});
LoginLoading.args = { currentModal: 'login' };
LoginLoading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];

export const LoginError = Template.bind({});
LoginError.args = { currentModal: 'login' };
LoginError.decorators = [
    StoreDecorator({
        loginForm: { errorMessage: 'The username and/or password you specified are not correct' },
    }),
];

export const Register = Template.bind({});
Register.args = { currentModal: 'register' };

export const RegisterLoading = Template.bind({});
RegisterLoading.args = { currentModal: 'register' };
RegisterLoading.decorators = [StoreDecorator({ registerForm: { isLoading: true } })];

export const RegisterError = Template.bind({});
RegisterError.args = { currentModal: 'register' };
RegisterError.decorators = [
    StoreDecorator({
        registerForm: { errorMessage: 'Username cannot be used. Please choose another username' },
    }),
];

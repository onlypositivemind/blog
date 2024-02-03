/* eslint-disable @typescript-eslint/no-empty-function */
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator, StoreDecorator } from '@/shared/config/storybook';
import LoginForm from '../../ui/LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    args: {
        onCloseModal: () => {},
        onChangeModalView: () => {},
    },
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ loginForm: { isLoading: false } })];

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];

export const Error = Template.bind({});
Error.decorators = [
    StoreDecorator({
        loginForm: {
            isLoading: false,
            errorMessage: 'The username and/or password you specified are not correct',
        },
    }),
];

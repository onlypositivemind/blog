import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook/CenterElementDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ loginForm: { isLoading: false } })];

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];

export const Error = Template.bind({});
Error.decorators = [
    StoreDecorator({
        loginForm: {
            isLoading: false,
            errorMessage: 'The username and/or password you specified are not correct.',
        },
    }),
];
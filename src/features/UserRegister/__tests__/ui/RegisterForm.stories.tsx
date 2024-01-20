/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator, StoreDecorator } from '@/shared/config/storybook';
import RegisterForm from '../../ui/RegisterForm';

export default {
    title: 'features/RegisterForm',
    component: RegisterForm,
    args: {
        onCloseModal: () => {},
        onChangeModalView: () => {},
    },
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => <RegisterForm {...args} />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ registerForm: { isLoading: false } })];

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({ registerForm: { isLoading: true } })];

export const Error = Template.bind({});
Error.decorators = [
    StoreDecorator({
        registerForm: {
            isLoading: false,
            errorMessage: 'Username cannot be used. Please choose another username',
        },
    }),
];

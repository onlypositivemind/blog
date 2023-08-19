import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook/CenterElementDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const AllOptions = Template.bind({});
AllOptions.decorators = [CenterElementDecorator];

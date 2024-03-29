import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook';
import { Header } from '../../ui/Header';

export default {
    title: 'widgets/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const NotAuth = Template.bind({});
NotAuth.decorators = [StoreDecorator({})];

export const Auth = Template.bind({});
Auth.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '0', email: 'somemail@gmail.com', username: 'Omegafine', roles: [] },
        },
    }),
];

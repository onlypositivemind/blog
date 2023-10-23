import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => (
    <ThemeProvider>
        <Sidebar />
    </ThemeProvider>
);

export const NotAuth = Template.bind({});
NotAuth.decorators = [StoreDecorator({})];

export const Auth = Template.bind({});
Auth.decorators = [StoreDecorator({ user: { authData: {} } })];

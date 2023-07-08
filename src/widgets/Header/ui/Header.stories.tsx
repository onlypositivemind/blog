import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './Header';

export default {
    title: 'widgets/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Story = Template.bind({});

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutPage from '../../ui/AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Story = Template.bind({});

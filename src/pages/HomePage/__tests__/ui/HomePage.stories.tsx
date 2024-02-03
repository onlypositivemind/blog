import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook';
import HomePage from '../../ui/HomePage';

export default {
    title: 'pages/HomePage',
    component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const Story = Template.bind({});
Story.decorators = [StoreDecorator({})];

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FullHeightDecorator } from '@/shared/config/storybook/FullHeightDecorator';
import { NotFoundPage } from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Story = Template.bind({});
Story.decorators = [FullHeightDecorator];

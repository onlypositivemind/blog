import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FullHeightDecorator } from '@/shared/config/storybook';
import { NotFoundPage } from '../../ui/NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Story = Template.bind({});
Story.decorators = [FullHeightDecorator];

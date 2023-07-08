import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FullHeightDecorator } from '@/shared/config/storybook/FullHeightDecorator';
import { PageLoader } from './PageLoader';

export default {
    title: 'widgets/PageLoader',
    component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = () => <PageLoader />;

export const Story = Template.bind({});
Story.decorators = [FullHeightDecorator];

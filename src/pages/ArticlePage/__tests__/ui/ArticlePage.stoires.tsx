import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlePage from '../../ui/ArticlePage/ArticlePage';

export default {
    title: 'pages/ArticlePage',
    component: ArticlePage,
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = () => <ArticlePage />;

export const Story = Template.bind({});

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Story = Template.bind({});

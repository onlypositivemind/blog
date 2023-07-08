import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageError } from './PageError';

export default {
    title: 'widgets/PageError',
    component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = () => <PageError />;

export const Story = Template.bind({});

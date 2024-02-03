import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Story = Template.bind({});

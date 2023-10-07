import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook/CenterElementDecorator';
import { Spin } from './Spin';

export default {
    title: 'shared/Spin',
    component: Spin,
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof Spin>;

const Template: ComponentStory<typeof Spin> = () => <Spin />;

export const Story = Template.bind({});

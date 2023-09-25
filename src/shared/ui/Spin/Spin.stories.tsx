import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook/CenterElementDecorator';
import { Spin } from './Spin';

export default {
    title: 'shared/Spin',
    component: Spin,
} as ComponentMeta<typeof Spin>;

const Template: ComponentStory<typeof Spin> = () => <Spin />;

export const AllOptions = Template.bind({});
AllOptions.decorators = [CenterElementDecorator];

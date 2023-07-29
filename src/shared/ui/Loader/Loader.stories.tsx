import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook/CenterElementDecorator';
import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const AllOptions = Template.bind({});
AllOptions.decorators = [CenterElementDecorator];

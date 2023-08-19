import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook/CenterElementDecorator';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    args: {
        value: 'Omegafine',
        placeholder: 'Username',
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input style={{ width: 320 }} {...args} />;

export const AllOptions = Template.bind({});
AllOptions.decorators = [CenterElementDecorator];

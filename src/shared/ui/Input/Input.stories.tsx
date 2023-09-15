import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook/CenterElementDecorator';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    args: {},
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input style={{ width: 320 }} {...args} />;

export const Default = Template.bind({});
Default.args = { value: 'some text' };

export const Label = Template.bind({});
Label.args = { label: 'Label' };

export const Placeholder = Template.bind({});
Placeholder.args = { placeholder: 'Placeholder' };

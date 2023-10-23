import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    args: {
        value: 'Lorem ipsum dolor sit amet.',
        placeholder: 'Placeholder',
    },
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <Input {...args} wrapperStyle={{ maxWidth: 300 }} />
);

export const Story = Template.bind({});

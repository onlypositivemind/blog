import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    args: {
        options: [
            { value: '1', content: 'Значение один' },
            { value: '2', content: 'Значение два' },
            { value: '3', content: 'Значение три' },
        ],
    },
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Story = Template.bind({});

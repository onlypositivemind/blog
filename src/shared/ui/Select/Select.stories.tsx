import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    args: {
        options: [
            { value: '1', content: 'Value 1' },
            { value: '2', content: 'Value 2' },
            { value: '3', content: 'Value 3' },
        ],
    },
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Story = Template.bind({});

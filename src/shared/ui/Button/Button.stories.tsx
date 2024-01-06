import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    args: {
        theme: 'primary',
        size: 'h4',
    },
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Story = Template.bind({});

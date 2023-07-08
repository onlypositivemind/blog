import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook/CenterElementDecorator';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    args: {
        theme: 'primary',
        size: 'size_h4',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Button</Button>
);

export const AllOptions = Template.bind({});
AllOptions.decorators = [CenterElementDecorator];

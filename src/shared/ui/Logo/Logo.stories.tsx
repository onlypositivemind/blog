import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook/CenterElementDecorator';
import { Logo } from './Logo';

export default {
    title: 'shared/Logo',
    component: Logo,
    args: {
        theme: 'primary',
    },
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Story = Template.bind({});

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    args: {
        src: 'https://avatars.githubusercontent.com/u/91557152?v=4',
        size: 100,
    },
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args}>Avatar</Avatar>;

export const Story = Template.bind({});

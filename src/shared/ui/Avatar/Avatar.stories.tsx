import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { Avatar } from './Avatar';
import mockAvatar from '@/shared/assets/tests/mockAvatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    args: {
        src: mockAvatar,
        size: 100,
    },
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Story = Template.bind({});

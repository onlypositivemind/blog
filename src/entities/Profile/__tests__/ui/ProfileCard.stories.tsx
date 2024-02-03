import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { sbProfileData } from '@/shared/lib/tests/storybook';
import { ProfileCard } from '../../ui/ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {},
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = { data: sbProfileData };

export const Loading = Template.bind({});
Loading.args = { isLoading: true };

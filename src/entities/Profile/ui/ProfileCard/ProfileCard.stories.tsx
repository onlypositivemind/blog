import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { mockProfileData } from '@/shared/lib/tests/mock/profile'; // TODO не работает импорт из '@/shared/lib/tests'
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {},
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = { data: mockProfileData };

export const Loading = Template.bind({});
Loading.args = { isLoading: true };

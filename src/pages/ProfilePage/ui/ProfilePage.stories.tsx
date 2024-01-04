import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Profile } from '@/entities/Profile';
import { StoreDecorator } from '@/shared/config/storybook';
import { mockProfileData } from '@/shared/lib/tests/mock/profile'; // TODO не работает импорт из '@/shared/lib/tests'
import ProfilePage from './ProfilePage';
import mockAvatar from '@/shared/assets/tests/mockAvatar.jpg';

const profile: Profile = { ...mockProfileData, avatar: mockAvatar };

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Story = Template.bind({});
Story.decorators = [
    StoreDecorator({
        editableProfileCard: { data: profile, form: profile, isReadonly: true },
    }),
];

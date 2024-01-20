import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook';
import { sbProfileData } from '@/shared/lib/tests/storybook';
import ProfilePage from '../../ui/ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Story = Template.bind({});
Story.decorators = [
    StoreDecorator({
        editableProfileCard: { data: sbProfileData, form: sbProfileData, isReadonly: true },
    }),
];

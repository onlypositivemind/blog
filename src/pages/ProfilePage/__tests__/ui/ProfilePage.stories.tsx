import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook';
import { sbProfileMock } from '@/shared/lib/tests/storybook';
import ProfilePage from '../../ui/ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Story = Template.bind({});
Story.decorators = [
    StoreDecorator({
        editableProfileCard: { data: sbProfileMock, form: sbProfileMock, isReadonly: true },
    }),
];

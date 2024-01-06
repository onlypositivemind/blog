import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Profile } from '@/entities/Profile';
import { CenterElementDecorator, StoreDecorator } from '@/shared/config/storybook';
import { mockProfileData } from '@/shared/lib/tests/mock/profile'; // TODO не работает импорт из '@/shared/lib/tests'
import { ProfileValidationError } from '../../model/const/profileValidation';
import { GET_PROFILE_ERROR_MESSAGE } from '../../model/services/getProfile';
import { EditableProfileCard } from './EditableProfileCard';
import mockAvatar from '@/shared/assets/tests/mockAvatar.jpg';

const profile: Profile = { ...mockProfileData, avatar: mockAvatar };

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    args: {},
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator({
        editableProfileCard: { data: profile, form: profile, isReadonly: true },
    }),
];

export const Loading = Template.bind({});
Loading.decorators = [
    StoreDecorator({
        editableProfileCard: { isLoading: true },
    }),
];

export const Error = Template.bind({});
Error.decorators = [
    StoreDecorator({
        editableProfileCard: { errorMessage: GET_PROFILE_ERROR_MESSAGE },
    }),
];

export const ValidationErrors = Template.bind({});
ValidationErrors.decorators = [
    StoreDecorator({
        editableProfileCard: {
            data: profile,
            form: profile,
            isReadonly: false,
            validationErrors: [ProfileValidationError.EMAIL, ProfileValidationError.USERNAME],
        },
    }),
];

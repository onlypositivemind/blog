import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator, StoreDecorator } from '@/shared/config/storybook';
import { sbProfileData } from '@/shared/lib/tests/storybook';
import { GET_PROFILE_ERROR_MESSAGE } from '../../api/getProfile';
import { ProfileValidationError } from '../../model/consts';
import { EditableProfileCard } from '../../ui/EditableProfileCard/EditableProfileCard';

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
        editableProfileCard: { data: sbProfileData, form: sbProfileData, isReadonly: true },
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
            data: sbProfileData,
            form: sbProfileData,
            isReadonly: false,
            validationErrors: [ProfileValidationError.EMAIL, ProfileValidationError.USERNAME],
        },
    }),
];

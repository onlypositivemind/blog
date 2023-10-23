import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { FormInput } from './FormInput';

export default {
    title: 'shared/FormInput',
    component: FormInput,
    args: {
        value: 'Omegafine',
        placeholder: 'Username',
    },
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => (
    <FormInput {...args} wrapperStyle={{ maxWidth: 300 }} />
);

export const Story = Template.bind({});

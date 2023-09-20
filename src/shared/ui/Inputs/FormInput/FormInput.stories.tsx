import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook/CenterElementDecorator';
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

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Story = Template.bind({});

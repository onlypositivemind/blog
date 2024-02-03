import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { CountrySelect } from '../../ui/CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    args: {},
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Story = Template.bind({});

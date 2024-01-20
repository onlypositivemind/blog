import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { CurrencySelect } from '../../ui/CurrencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    args: {},
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Story = Template.bind({});

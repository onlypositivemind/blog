import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook/CenterElementDecorator';
import { LangSwitcher } from './LangSwitcher';

export default {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = () => <LangSwitcher />;

export const Story = Template.bind({});

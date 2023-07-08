import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SecondaryBgColorDecorator } from '@/shared/config/storybook/SecondaryBgColorDecorator';
import { LangSwitcher } from './LangSwitcher';

export default {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = () => <LangSwitcher />;

export const Light = Template.bind({});
Light.decorators = [SecondaryBgColorDecorator('light')];

export const Dark = Template.bind({});
Dark.decorators = [SecondaryBgColorDecorator('dark')];

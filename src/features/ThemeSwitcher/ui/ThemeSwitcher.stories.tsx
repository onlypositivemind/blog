import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SecondaryBgColorDecorator } from '@/shared/config/storybook/SecondaryBgColorDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />;

export const Light = Template.bind({});
Light.decorators = [SecondaryBgColorDecorator('light')];

export const Dark = Template.bind({});
Dark.decorators = [SecondaryBgColorDecorator('dark')];

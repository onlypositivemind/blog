import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterElementDecorator } from '@/shared/config/storybook/CenterElementDecorator';
import { SecondaryBgColorDecorator } from '@/shared/config/storybook/SecondaryBgColorDecorator';
import { Logo } from './Logo';

export default {
    title: 'shared/Logo',
    component: Logo,
    args: {
        theme: 'primary',
    },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args}>Logo</Logo>;

export const AllOptions = Template.bind({});
AllOptions.decorators = [CenterElementDecorator];

export const SecondaryBGLight = Template.bind({});
SecondaryBGLight.decorators = [CenterElementDecorator, SecondaryBgColorDecorator('light')];

export const SecondaryBGDark = Template.bind({});
SecondaryBGDark.decorators = [CenterElementDecorator, SecondaryBgColorDecorator('dark')];

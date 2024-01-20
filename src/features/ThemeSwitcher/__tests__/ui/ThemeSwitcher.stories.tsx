import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { CenterElementDecorator } from '@/shared/config/storybook';
import { ThemeSwitcher } from '../../ui/ThemeSwitcher';

export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    decorators: [CenterElementDecorator],
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => (
    <ThemeProvider>
        <ThemeSwitcher />
    </ThemeProvider>
);

export const Story = Template.bind({});

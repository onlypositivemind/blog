import { addDecorator } from '@storybook/react';
import '../../src/shared/config/i18n/i18n';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import '../../src/app/styles/index.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: 'light', color: '#fff' },
            { name: 'dark', class: 'dark', color: '#000' },
        ],
    },
};

addDecorator(ThemeDecorator('light'));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);

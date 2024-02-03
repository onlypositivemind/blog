import path from 'path';
import type webpack from 'webpack';
import { DefinePlugin } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import type { BuildPaths } from '../build/types/config';

export default {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config: webpack.Configuration) => {
        const paths: BuildPaths = {
            build: '',
            public: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };

        config.resolve!.modules!.push(paths.src);
        config.resolve!.extensions!.push('.ts', '.tsx');
        config.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };

        config.module!.rules = config.module!.rules!.map(
            // @ts-ignore TODO
            (rule: webpack.RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            },
        );

        config.module!.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.module!.rules.push(buildCssLoader(true));

        config.plugins!.push(
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify('https://testapi.ru'),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        );

        return config;
    },
};

import type { RuleSetRule } from 'webpack';
import { babelRemovePropsPlugin } from '../babel/babelRemovePropsPlugin';
import type { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTSX?: boolean;
}

export const buildBabelLoader = ({ isDev, isProd, isTSX }: BuildBabelLoaderProps): RuleSetRule => ({
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            plugins: [
                ['@babel/plugin-transform-typescript', { isTSX }],
                '@babel/plugin-transform-runtime',
                isTSX &&
                    isProd && [babelRemovePropsPlugin, { props: ['data-testid', 'dataTestId'] }],
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});

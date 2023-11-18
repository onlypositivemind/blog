import { Configuration } from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): Configuration => ({
    mode: options.mode,
    entry: options.paths.entry,
    output: {
        filename: '[name].[contenthash].js',
        path: options.paths.build,
        clean: true,
        publicPath: '/',
    },
    plugins: buildPlugins(options),
    module: {
        rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: options.isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined,
});

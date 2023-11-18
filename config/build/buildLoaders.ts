import { RuleSetRule } from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const fileLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    // TODO
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false });

    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true });

    const cssLoader = buildCssLoader(options.isDev);

    return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader];
};

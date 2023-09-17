import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: 'file-loader' }],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false });

    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true });

    const cssLoader = buildCssLoader(options.isDev);

    return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader];
};

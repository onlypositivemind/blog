import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: 'file-loader' }],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoader(isDev);

    return [fileLoader, svgLoader, tsLoader, cssLoader];
};

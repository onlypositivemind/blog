import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = options;

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

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[local]__[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    return [fileLoader, svgLoader, tsLoader, cssLoader];
};

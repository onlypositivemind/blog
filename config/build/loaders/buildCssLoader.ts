import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { RuleSetRule } from 'webpack';

export const buildCssLoader = (isDev: boolean): RuleSetRule => ({
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev ? '[local]__[hash:base64:5]' : '[hash:base64:8]',
                },
            },
        },
        'sass-loader',
    ],
});

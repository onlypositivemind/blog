import { RuleSetRule } from 'webpack';

export const buildSvgLoader = (): RuleSetRule => ({
    test: /\.svg$/,
    use: [
        {
            loader: '@svgr/webpack',
            options: {
                replaceAttrValues: { '#000': 'currentColor', '#000000': 'currentColor' },
                state: { componentName: 'Icon' },
                dimensions: true,
                expandProps: 'end',
                svgo: false,
                svgoConfig: { plugins: [{ removeViewBox: false }] },
            },
        },
    ],
});

import { RuleSetRule } from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const fileLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const svgLoader = buildSvgLoader();

    const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false });

    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true });

    const cssLoader = buildCssLoader(options.isDev);

    return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader];
};

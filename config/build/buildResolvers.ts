import type { Configuration } from 'webpack';
import type { BuildOptions } from './types/config';

export const buildResolvers = ({ paths }: BuildOptions): Configuration['resolve'] => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
        '@': paths.src,
    },
});

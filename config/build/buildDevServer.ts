import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguration => {
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
};

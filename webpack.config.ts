import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        public: path.resolve(__dirname, 'public'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
    };

    const mode = env.mode ?? 'development';
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const config: Configuration = buildWebpackConfig({
        paths,
        port: +env.port ?? 3000,
        apiUrl: env.apiUrl ?? 'http://localhost:5000/api',
        hasBundleAnalyzer: env.hasBundleAnalyzer === 'true',
        mode,
        isDev,
        isProd,
    });

    return config;
};

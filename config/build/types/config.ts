export type BuildMode = 'development' | 'production';

export interface BuildEnv {
    mode: BuildMode;
    port: string;
    apiUrl: string;
    hasBundleAnalyzer: string;
}

export interface BuildPaths {
    entry: string;
    build: string;
    public: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
}

export interface BuildOptions extends Omit<BuildEnv, 'port' | 'hasBundleAnalyzer'> {
    paths: BuildPaths;
    port: number;
    isDev: boolean;
    isProd: boolean;
    hasBundleAnalyzer: boolean;
    project: 'app' | 'jest' | 'storybook';
}

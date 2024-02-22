type BuildMode = 'development' | 'production';

interface BuildEnv {
    mode: BuildMode;
    port: string;
    apiUrl: string;
    hasBundleAnalyzer: string;
}

interface BuildPaths {
    entry: string;
    build: string;
    public: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
}

interface BuildOptions extends Omit<BuildEnv, 'port' | 'hasBundleAnalyzer'> {
    paths: BuildPaths;
    port: number;
    isDev: boolean;
    isProd: boolean;
    hasBundleAnalyzer: boolean;
    project: 'app' | 'jest' | 'storybook';
}

export type { BuildMode, BuildEnv, BuildPaths, BuildOptions };

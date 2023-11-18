export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    build: string;
    public: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
    hasAnalyzer: boolean;
}

export interface BuildOptions extends BuildEnv {
    paths: BuildPaths;
    isDev: boolean;
    isProd: boolean;
}

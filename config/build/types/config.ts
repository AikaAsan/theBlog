export type buildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
}
export interface BuildOptions {
    mode: buildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}

export interface BuildEnv {
    mode: buildMode;
    port: number;
    apiUrl: string;
}

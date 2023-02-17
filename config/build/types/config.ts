export type buildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}
export interface BuildOptions {
    mode: buildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}

export interface BuildEnv {
    mode: buildMode;
    port: number;
}

export type buildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}
export interface BuildOptions {
    mode: buildMode;
    paths: BuildPaths;
    isDev: boolean;
}

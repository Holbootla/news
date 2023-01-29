export enum buildMode {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production'   
}

type BuildMode = buildMode.DEVELOPMENT | buildMode.PRODUCTION;

export interface BuildPaths {
    entry:string;
    build:string;
    html:string;
}

export interface BuildOptions {
    mode:BuildMode;
    paths:BuildPaths;
}
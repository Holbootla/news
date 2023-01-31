export enum buildMode {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production'   
}

type BuildMode = buildMode.DEVELOPMENT | buildMode.PRODUCTION;

export interface BuildPaths {
    entry:string;
    build:string;
    html:string;
    src:string;
}

export interface BuildEnv {
    mode:BuildMode;
    port:number;
}

export interface BuildOptions {
    mode:BuildMode;
    paths:BuildPaths;
    port:number;
    isDev:boolean;
}
type BuildMode = 'development' | 'production';

export const buildMode = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
} as const;

export interface BuildPaths {
    entry:string;
    build:string;
    html:string;
    src:string;
}

export interface BuildEnv {
    mode:BuildMode;
    port:number;
    analyze:boolean;
}

export interface BuildOptions {
    mode:BuildMode;
    paths:BuildPaths;
    port:number;
    isDev:boolean;
    analyze:boolean;
}

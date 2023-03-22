export enum BuildMode {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
}

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
    api:string;
}

export interface BuildOptions {
    mode:BuildMode;
    paths:BuildPaths;
    port:number;
    isDev:boolean;
    analyze:boolean;
    api:string;
    project: 'frontend' | 'storybook' | 'jest'
}

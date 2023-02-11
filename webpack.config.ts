import { Configuration } from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, buildMode, BuildPaths } from './config/build/Types/config';

export default (env:BuildEnv):Configuration => {
    const mode = env.mode || buildMode.DEVELOPMENT;
    const port = env.port || 3000;

    const buildPaths:BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    return buildWebpackConfig({
        mode,
        port,
        paths: buildPaths,
        isDev: mode === buildMode.DEVELOPMENT,
    });
};

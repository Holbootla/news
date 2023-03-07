import { Configuration } from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/Types/config';

export default (env:BuildEnv):Configuration => {
    const mode = env.mode || BuildMode.DEVELOPMENT;
    const port = env.port || 3000;
    const analyze = env.analyze || false;
    const api = env.api || 'http://localhost:8080';

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
        isDev: mode === BuildMode.DEVELOPMENT,
        analyze,
        api,
    });
};

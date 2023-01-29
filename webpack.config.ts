import { Configuration } from 'webpack';
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, buildMode, BuildPaths } from "./config/build/Types/config";
import path from "path";

export default (env:BuildEnv):Configuration => {
    const mode = env.mode || buildMode.DEVELOPMENT;
    const port = env.port || 3000;

    const buildPaths:BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    return buildWebpackConfig({
        mode,
        port,
        paths: buildPaths,
        isDev: mode === buildMode.DEVELOPMENT,
    });
};
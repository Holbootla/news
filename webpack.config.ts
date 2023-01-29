import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {buildMode, BuildPaths} from "./config/build/Types/config";
import path from "path";

const mode = buildMode.DEVELOPMENT;

const buildPaths:BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const config:webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths: buildPaths,
});

export default config;
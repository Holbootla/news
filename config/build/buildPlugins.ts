import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildPaths} from "./Types/config";

export function buildPlugins(paths:BuildPaths):webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
    ];
}
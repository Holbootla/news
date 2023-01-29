import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildPaths } from "./Types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(paths:BuildPaths):WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/name.[contenthash:8].css',
            chunkFilename: 'css/name.[contenthash:8].css',            
        })
    ];
}
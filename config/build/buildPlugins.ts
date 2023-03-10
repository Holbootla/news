import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack'; import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildPaths } from './Types/config';

export const buildPlugins = (paths:BuildPaths, isDev:boolean, analyze:boolean, api:string):WebpackPluginInstance[] => {
    const plugins = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/name.[contenthash:8].css',
            chunkFilename: 'css/name.[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(api),
        }),
    ];

    if (analyze) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
};

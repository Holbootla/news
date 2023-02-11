import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildPaths } from './Types/config';

export const buildPlugins = (paths:BuildPaths, isDev:boolean):WebpackPluginInstance[] => (
    [
        new HtmlWebpackPlugin({ template: paths.html }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/name.[contenthash:8].css',
            chunkFilename: 'css/name.[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ]
);

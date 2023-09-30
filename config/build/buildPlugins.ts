import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import { BuildOptions } from './Types/config';

export const buildPlugins = ({
    paths, isDev, analyze, api, project,
}:BuildOptions):WebpackPluginInstance[] => {
    const plugins = [
        new HtmlWebpackPlugin({ template: paths.html, publicPath: '/' }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/name.[contenthash:8].css',
            chunkFilename: 'css/name.[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(api),
            __PROJECT__: JSON.stringify(project),
        }),
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales },
            ],
        }),
    ];

    if (analyze) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
};

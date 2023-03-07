import { Configuration } from 'webpack';
import { BuildOptions } from './Types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = ({
    mode, port, paths, isDev, analyze, api,
}:BuildOptions):Configuration => (
    {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            assetModuleFilename: 'assets/[hash][ext]',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths, isDev, analyze, api),
        module: {
            rules: buildLoaders(isDev),
        },
        resolve: buildResolvers(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(port) : undefined,
    }
);

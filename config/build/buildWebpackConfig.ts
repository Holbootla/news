import { Configuration } from 'webpack';
import { BuildOptions } from './Types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options:BuildOptions):Configuration => {
    const {
        mode, port, paths, isDev,
    } = options;

    return (
        {
            mode,
            entry: paths.entry,
            output: {
                filename: '[name].[contenthash].js',
                assetModuleFilename: 'assets/[hash][ext]',
                path: paths.build,
                clean: true,
            },
            plugins: buildPlugins(options),
            module: {
                rules: buildLoaders(isDev),
            },
            resolve: buildResolvers(paths),
            devtool: isDev ? 'inline-source-map' : undefined,
            devServer: isDev ? buildDevServer(port) : undefined,
        }
    );
};

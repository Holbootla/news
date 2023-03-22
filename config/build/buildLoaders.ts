import { RuleSetRule } from 'webpack';
import { buildCSSLoader } from './loaders/CSSLoader';
import { buildBabelLoader } from './loaders/babelLoader';

export const buildLoaders = (isDev:boolean):RuleSetRule[] => {
    const cssLoader = buildCSSLoader(isDev);

    const babelLoader = buildBabelLoader();

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const imgLoader = {
        test: /\.(png|jpe?g|webp|gif)/,
        type: 'asset/resource',
        generator: {
            filename: 'images/[hash][ext]',
        },
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
        generator: {
            filename: 'icons/[hash][ext]',
        },
    };

    return [
        babelLoader,
        tsLoader,
        cssLoader,
        imgLoader,
        svgLoader,
    ];
};

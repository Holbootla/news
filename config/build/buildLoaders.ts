import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (isDev:boolean):RuleSetRule[] => {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath:string) => resPath.includes('.module.'),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
                    },                    
                }
            },
            "sass-loader",
        ],
    };
    
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    
    const imgLoader = {
        test: /\.(png|jpe?g|webp|gif)/,
        type: 'asset/resource',
        generator: {
            filename: 'images/[hash][ext]'
        }
    };
    
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
        generator: {
            filename: 'icons/[hash][ext]'
        }
    };
    
    const babelLoader = {
        test: /\.[t|j]sx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
    
    return [
        babelLoader,
        tsLoader,
        cssLoader,
        imgLoader,
        svgLoader,
    ]
};
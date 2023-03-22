export const buildBabelLoader = () => (
    {
        test: /\.[t|j]sx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    }
);

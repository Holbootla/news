import { Configuration } from 'webpack-dev-server';

export const buildDevServer = (port:number):Configuration => ({
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
});

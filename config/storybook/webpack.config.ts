import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/Types/config';
import { buildCSSLoader } from '../build/loaders/CSSLoader';

export default ({ config }: {config: Configuration}) => {
    const paths:BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '../../src'),
    };

    config.resolve?.modules?.push(paths.src);

    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.resolve?.alias) {
        config.resolve.alias = { '@': paths.src };
    }

    config.module?.rules?.push(buildCSSLoader(true));

    if (config.module?.rules) {
        config.module.rules = (config.module.rules as Array<RuleSetRule>).map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(''),
        }),
    );

    return config;
};

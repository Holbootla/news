import { Configuration, RuleSetRule } from 'webpack';
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

    config.resolve.modules.push(paths.src);

    config.resolve.extensions.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = { '@': paths.src };

    config.module.rules.push(buildCSSLoader(true));

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    return config;
};

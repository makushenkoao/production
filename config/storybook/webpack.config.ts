import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build';
import { buildStyleLoader } from '../build/loaders/buildStyleLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {
    config: Configuration
}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config.module.rules.push(buildSvgLoader());
    config.module.rules.push(buildStyleLoader(true));
    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true,
    }));

    return config;
};

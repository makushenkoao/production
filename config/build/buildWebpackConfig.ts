import { type Configuration } from 'webpack';
import { type BuildOptions } from './types/config';
import {
    buildPlugins, buildLoaders, buildResolvers, buildDevServer,
} from '.';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};

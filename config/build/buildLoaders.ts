import { type RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type BuildOptions } from './types/config';
import { buildStyleLoader } from './loaders/buildStyleLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const { isDev } = options;

    const svgLoader = buildSvgLoader();

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ua', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const styleLoader = buildStyleLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [{ loader: 'file-loader' }],
    };

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, styleLoader];
};

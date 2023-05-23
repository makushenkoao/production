import HtmlWebpackPlugin from "html-webpack-plugin";
import {
  WebpackPluginInstance,
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = (
  options: BuildOptions
): WebpackPluginInstance[] => {
  const { isDev, paths } = options;
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin());
  }

  return plugins;
};

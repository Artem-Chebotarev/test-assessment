import webpack from 'webpack';

import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/base';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = buildCssLoader(isDev);

  const tsLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
  };

  const fontLoader = {
    test: /\.(woff|eot|ttf)$/,
    type: 'asset/resource',
    generator: {
      filename: './fonts/[name][ext]',
    },
  };

  return [tsLoader, svgLoader, fileLoader, cssLoader, fontLoader];
}

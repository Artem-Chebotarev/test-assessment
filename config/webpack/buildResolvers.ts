import webpack from 'webpack';

import { BuildOptions } from './types/base';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': options.paths.src,
    },
  };
}

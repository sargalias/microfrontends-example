import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

const prodConfig = merge(commonConfig, {
  mode: 'production',
  output: {
    publicPath: '/auth/latest',
    filename: '[name].[contenthash].js',
  },
});

export default prodConfig;

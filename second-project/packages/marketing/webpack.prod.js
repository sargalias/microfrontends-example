import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

const prodConfig = merge(commonConfig, {
  mode: 'production',
  output: {
    publicPath: '/marketing/latest/',
    filename: '[name].[contenthash].js',
  },
});

export default prodConfig;

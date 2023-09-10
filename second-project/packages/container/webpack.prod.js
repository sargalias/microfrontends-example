import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';
// import WebpackBundleAnalyzer from 'webpack-bundle-analyzer';

// const BundleAnalyzerPlugin = WebpackBundleAnalyzer.BundleAnalyzerPlugin;

const prodConfig = (env) =>
  merge(commonConfig(env), {
    mode: 'production',
    output: {
      publicPath: '/container/latest/',
      filename: '[name].[contenthash].js',
    },
  });

export default prodConfig;

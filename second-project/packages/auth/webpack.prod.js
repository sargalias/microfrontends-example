import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';
import WebpackBundleAnalyzer from 'webpack-bundle-analyzer';
// const BundleAnalyzerPlugin = WebpackBundleAnalyzer.BundleAnalyzerPlugin;

const prodConfig = merge(commonConfig, {
  mode: 'production',
  output: {
    publicPath: '/auth/latest',
    filename: '[name].[contenthash].js',
  },
  // plugins: [new BundleAnalyzerPlugin()],
});

export default prodConfig;

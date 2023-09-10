import webpack from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';
// import WebpackBundleAnalyzer from 'webpack-bundle-analyzer';

const domain = process.env.DOMAIN;

const { ModuleFederationPlugin } = webpack.container;
// const BundleAnalyzerPlugin = WebpackBundleAnalyzer.BundleAnalyzerPlugin;

const prodConfig = merge(commonConfig, {
  mode: 'production',
  output: {
    publicPath: '/container/latest/',
    filename: '[name].[contenthash].js',
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new ModuleFederationPlugin({
      name: 'host-app',
      remotes: {
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
      },
    }),
  ],
});

export default prodConfig;

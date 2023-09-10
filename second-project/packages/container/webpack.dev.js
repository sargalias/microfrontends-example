import webpack from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

const { ModuleFederationPlugin } = webpack.container;

const devConfig = merge(commonConfig, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        auth: `auth@http://localhost:8082/remoteEntry.js`,
        marketing: `marketing@http://localhost:8081/remoteEntry.js`,
      },
    }),
  ],
});

export default devConfig;

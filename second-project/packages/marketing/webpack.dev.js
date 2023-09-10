import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

const devConfig = merge(commonConfig, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/',
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});

export default devConfig;

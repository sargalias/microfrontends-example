import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

const devConfig = merge(commonConfig, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8082/',
  },
  devServer: {
    port: 8082,
    historyApiFallback: true,
  },
});

export default devConfig;

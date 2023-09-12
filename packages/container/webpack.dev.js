import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

const devConfig = (env) =>
  merge(commonConfig(env), {
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
  });

export default devConfig;

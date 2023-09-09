import merge from 'webpack-merge';
import commonConfig from './webpack.common';

const devConfig = merge(commonConfig, {
  mode: 'development',
});

export default devConfig;

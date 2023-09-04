import devConfig from './vite.config.dev';
import prodConfig from './vite.config.prod';

const config = process.env.NODE_ENV !== 'development' ? devConfig : prodConfig;

export default config;

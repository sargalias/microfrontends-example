import { defineConfig } from 'vite';
import devConfig from './vite.config.dev';
import prodConfig from './vite.config.prod';

const getConfig = () => {
  const config = process.env._MODE === 'production' ? prodConfig : devConfig;
  return config;
};

export default defineConfig(getConfig);

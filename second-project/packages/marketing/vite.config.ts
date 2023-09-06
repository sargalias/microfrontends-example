import { defineConfig } from 'vite';
import devConfig from './vite.config.dev';
import prodConfig from './vite.config.prod';

const getConfig = ({ mode }) => {
  return mode === 'production' ? prodConfig : devConfig;
};

export default defineConfig(getConfig);

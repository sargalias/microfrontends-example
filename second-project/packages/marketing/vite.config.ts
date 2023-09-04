import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';
// import packageJson from './package.json';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    federation({
      name: 'marketing-app',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/Bootstrap',
      },
      // not working due to vite issues
      // shared: packageJson.dependencies,
    }),
  ],
  server: {
    port: 8081,
  },
});

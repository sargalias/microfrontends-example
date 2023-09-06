import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';
// import packageJson from './package.json';

const domain = process.env.DOMAIN;

// https://vitejs.dev/config/
export default defineConfig({
  base: '/container/latest/',
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        marketingApp: `${domain}/marketing/latest/remoteEntry.js`,
      },
      // not working due to vite issues
      // shared: packageJson.dependencies,
    }),
  ],
  server: {
    port: 8080,
  },
});

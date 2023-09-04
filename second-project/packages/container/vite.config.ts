import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    federation({
      name: 'host-app',
      remotes: {
        marketingApp: 'http://localhost:8081/assets/remoteEntry.js',
      },
    }),
    react(),
  ],
  server: {
    port: 8080,
  },
});

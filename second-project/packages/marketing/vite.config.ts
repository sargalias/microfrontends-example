import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      name: 'marketing-app',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/Bootstrap',
      },
    }),
    react(),
  ],
  server: {
    port: 8081,
  },
});

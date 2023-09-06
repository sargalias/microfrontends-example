import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';
// import packageJson from './package.json';

export default {
  base: '/marketing/latest/',
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    federation({
      name: 'marketing-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Marketing': './src/Bootstrap',
      },
      // not working due to vite issues
      // shared: packageJson.dependencies,
    }),
  ],
  server: {
    port: 8081,
  },
};

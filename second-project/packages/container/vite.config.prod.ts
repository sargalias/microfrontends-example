import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';
// import packageJson from './package.json';

const domain = process.env.DOMAIN;

// https://vitejs.dev/config/
export default {
  base: '/container/latest/',
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        marketing: `${domain}/marketing/latest/assets/remoteEntry.js`,
        auth: 'http://localhost:8082/remoteEntry.js',
      },
      // not working due to vite issues
      // shared: packageJson.dependencies,
    }),
  ],
  server: {
    port: 8080,
  },
};

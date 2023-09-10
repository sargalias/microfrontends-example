import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';
// import packageJson from './package.json';

// https://vitejs.dev/config/
export default {
  base: 'http://localhost:8080',
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        marketing: 'http://localhost:8081/assets/remoteEntry.js',
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

import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      name: 'container',
      remotes: {
        menu: 'http://localhost:3001/assets/remoteEntry.js',
        order: 'http://localhost:3002/assets/remoteEntry.js',
      },
      shared: {},
    }),
  ],
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'assets/index.css';
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  server: {
    host: 'localhost',
    port: 3000,
    strictPort: true,
    cors: true,
  },
  preview: {
    host: 'localhost',
    port: 3000,
    strictPort: true,
  },
});
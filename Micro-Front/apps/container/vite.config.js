// container/vite.config.js
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
       assetFileNames: 'assets/index.css',
    }
  }
  },
  server: {
    host: 'localhost',
    port: 3000,
    strictPort: true,
    cors: true,
  },
})
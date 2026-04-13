import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    federation({
      name: 'order',
      filename: 'remoteEntry.js',
      exposes: {
        './order': './src/order.js',
      },
      shared: {}, 
    }),
  ],
  server: {
    host: 'localhost',
    port: 3002,
    strictPort: true,
    cors: true,
  },
  preview: {
    host: 'localhost',
    port: 3002,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,       
    cssCodeSplit: false, 
  },
})
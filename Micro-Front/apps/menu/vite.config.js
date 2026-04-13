import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    federation({
    name: 'menu',
    filename: 'remoteEntry.js',
    exposes: {
      './menu': './src/menu.js',
    },
    shared: {}, 
}),
  ],
  server: {
    host: 'localhost',
    port: 3001,
    strictPort: true,
    cors: true,
  },
  preview: {
    host: 'localhost',
    port: 3001,
    strictPort: true,
  },
  build: {
    target: 'esnext',
     cssCodeSplit: false,
  },
  
})
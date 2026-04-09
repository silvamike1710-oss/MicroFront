import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'

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
  server: {
    host: 'localhost',
    port: 3000,
    strictPort: true,
    cors: true,
  },

})
console.log('FEDERATION LOADED');
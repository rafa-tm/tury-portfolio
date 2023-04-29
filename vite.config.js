import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../public',
    assetsDir: './dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html',
        nested: './nested/index.html'
      }
    }
  }
})

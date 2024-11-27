import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/pokemon-explorer',
  plugins: [TanStackRouterVite(), react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    outDir: 'build'
  }
})

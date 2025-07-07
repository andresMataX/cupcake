// vite.config.ts
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  build: { chunkSizeWarningLimit: 1024 * 2 },
  plugins: [
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/paraglide',
    }),
    tanstackRouter({ target: 'react' }),
    tailwindcss(),
    react(),
  ],
})

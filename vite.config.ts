// vite.config.ts
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tanstackRouter({ target: 'react' }), tailwindcss(), react()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
})

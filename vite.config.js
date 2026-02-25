import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// ES 模块下的路径修复方案
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  root: 'client',
  resolve: {
    alias: {
      // 告诉 Vite，看到 @ 就去 client/src 里面找！
      '@': path.resolve(__dirname, './client/src')
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})

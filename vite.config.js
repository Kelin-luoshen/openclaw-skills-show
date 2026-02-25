import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  // 核心1：告诉 Vite 网页入口在 client 文件夹
  root: 'client', 
  resolve: {
    alias: {
      // 核心2：告诉 Vite，代码里的 @ 代表主根目录下的 client/src
      '@': path.resolve(__dirname, './client/src') 
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})

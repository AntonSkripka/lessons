import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

const input = {
  main: resolve(__dirname, 'index.html'),
  hw83: resolve(__dirname, 'hw-83.html')
}

export default defineConfig({
  build: {
    rollupOptions: {
      input
    }
  }
})

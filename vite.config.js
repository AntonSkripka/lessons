import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'))
const input = {}
files.forEach(f => {
  const name = f.replace(/\.html$/, '')
  input[name] = resolve(__dirname, f)
})

export default defineConfig({
  build: {
    rollupOptions: {
      input
    }
  }
})

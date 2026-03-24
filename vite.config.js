import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        camere:   resolve(__dirname, 'camere.html'),
        servizi:  resolve(__dirname, 'servizi.html'),
        contatti: resolve(__dirname, 'contatti.html'),
      },
    },
  },
})

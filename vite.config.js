import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/goit-react-hw-19/', // 👈 ОБОВʼЯЗКОВО
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})

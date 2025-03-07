import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/tasks/',
  plugins: [react()],
  server: {
    port: 3000, // Укажите нужный порт, например, 3000
    open: true,  // Автоматически откроет браузер при запуске
  },
})

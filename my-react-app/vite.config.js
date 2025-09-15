// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/web-application/',
  plugins: [react()],
  server: {
    historyApiFallback: true, // ← ЭТО РЕШАЕТ ПРОБЛЕМУ!
  },
  // Для продакшена тоже настроим fallback
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite conexões externas
    port: 5173, // Porta padrão do Vite (você pode alterar se necessário)
    strictPort: true, // Garante que o Vite falhe se a porta já estiver em uso
  },
})

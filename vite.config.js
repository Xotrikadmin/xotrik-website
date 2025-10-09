import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // 👈 expone el server fuera del contenedor
    port: 5173        // 👈 asegura el puerto
  },
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'lucide-react';
            }
            // Agrupando bibliotecas grandes e não essenciais (como recharts, react-query, zod) em um chunk 'vendor'
            if (id.includes('recharts') || id.includes('@tanstack/react-query') || id.includes('zod') || id.includes('react-hook-form')) {
              return 'heavy-vendor';
            }
            // Deixamos o Rollup/Vite agrupar o restante das dependências de UI e utilitários
            return 'vendor';
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId;
          if (facadeModuleId) {
            // Extrai o nome do arquivo do caminho completo
            const fileName = facadeModuleId.split('/').pop()?.split('.')[0] || 'chunk';
            return `assets/${fileName}.js`;
          }
          return 'assets/[name]-[hash].js';
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
  },
}));
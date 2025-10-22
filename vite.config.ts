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
    target: 'es2015',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-toast'],
          'lucide-react': ['lucide-react'],
          'tailwind-vendor': ['tailwindcss', 'tailwindcss-animate'],
        },
        chunkFileNames: (chunkInfo) => {
          // Correção: Usar chunkInfo.facadeModuleId diretamente
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
import { defineConfig } from "vite"
import path from "path"
import { fileURLToPath } from "url"
import { createHtmlPlugin } from "vite-plugin-html"

// Compatibilidade com ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  // Define a raiz do projeto
  root: "./",

  // Base URL para produção
  base: "./",

  // Diretório de assets públicos
  publicDir: "public",

  // Configurações de build
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    minify: "terser",
    sourcemap: false,

    // Opções do Rollup
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html")
      },
      output: {
        // Estrutura de saída dos arquivos
        entryFileNames: "assets/js/[name].min.js",
        chunkFileNames: "assets/js/[name].min.js",
        assetFileNames: assetInfo => {
          const info = assetInfo.name.split(".")
          const ext = info[info.length - 1]

          // CSS
          if (ext === "css") {
            return "assets/css/[name].min[extname]"
          }

          // Imagens
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return "assets/img/[name][extname]"
          }

          // Fontes
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return "assets/fonts/[name][extname]"
          }

          // Outros
          return "assets/[name][extname]"
        }
      }
    },

    // Opções do Terser (minificação JS)
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"]
      },
      format: {
        comments: false
      }
    },

    // Minificação de CSS
    cssMinify: true,

    // Otimizações
    target: "es2015",
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000
  },

  // Configurações do servidor de desenvolvimento
  server: {
    port: 3000,
    open: true,
    cors: true,
    strictPort: false,
    fs: {
      strict: false,
      allow: [".."]
    }
  },

  // Configurações de preview (após build)
  preview: {
    port: 4173,
    open: true
  },

  // Plugins
  plugins: [
    createHtmlPlugin({
      minify: {
        // ✅ Remove comentários HTML (não afeta visual)
        removeComments: true,

        // ✅ Remove espaços em branco APENAS entre tags (não afeta layout)
        collapseWhitespace: true,

        // ❌ DESABILITADO - pode afetar espaçamento de elementos inline
        collapseInlineTagWhitespace: false,

        // ✅ Minifica CSS inline (não afeta visual se CSS estiver correto)
        minifyCSS: true,

        // ✅ Minifica JavaScript inline (não afeta funcionalidade)
        minifyJS: true,

        // ❌ DESABILITADO - mantém atributos vazios que podem ter propósito
        removeEmptyAttributes: false,

        // ✅ Remove type="text/javascript" (HTML5 não precisa)
        removeScriptTypeAttributes: true,

        // ✅ Remove type="text/css" (HTML5 não precisa)
        removeStyleLinkTypeAttributes: true,

        // ❌ DESABILITADO - mantém atributos que podem ser necessários
        removeRedundantAttributes: false,

        // ✅ Usa <!DOCTYPE html> (HTML5)
        useShortDoctype: true,

        // ❌ DESABILITADO - mantém todas as tags para compatibilidade
        removeOptionalTags: false,

        // ❌ DESABILITADO - mantém aspas para evitar problemas
        removeAttributeQuotes: false,

        // ❌ DESABILITADO - mantém URLs originais
        minifyURLs: false,

        // ❌ DESABILITADO - mantém ordem original dos atributos
        sortAttributes: false,

        // ❌ DESABILITADO - mantém ordem original das classes
        sortClassName: false,

        // ✅ Preserva espaços em branco em elementos <pre>, <textarea>
        preserveLineBreaks: false,

        // ✅ Mantém espaçamento condicional
        conservativeCollapse: true,

        // ✅ NÃO remove atributos boolean (checked, disabled, etc)
        collapseBooleanAttributes: false,

        // ✅ Mantém espaços que são significativos
        caseSensitive: true,

        // ✅ Ignora elementos personalizados
        ignoreCustomFragments: [/<\?[\s\S]*?\?>/, /<%[\s\S]*?%>/]
      },

      // Permite injetar dados no HTML (opcional)
      inject: {
        data: {
          title: "Autoavaliação de Desempenho",
          description: "Sistema de Autoavaliação - Prefeitura Municipal de Pedro Leopoldo"
        }
      }
    })
  ],

  // Resolver caminhos e aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/assets"),
      "@css": path.resolve(__dirname, "./src/assets/css"),
      "@js": path.resolve(__dirname, "./src/assets/js"),
      "@img": path.resolve(__dirname, "./src/assets/img"),
      "@config": path.resolve(__dirname, "./src/assets/js/config"),
      "@utils": path.resolve(__dirname, "./src/assets/js/utils"),
      "@modules": path.resolve(__dirname, "./src/assets/js/modules")
    }
  },

  // Otimizações de CSS
  css: {
    devSourcemap: false,
    preprocessorOptions: {}
  },

  // Configurações de otimização de dependências
  optimizeDeps: {
    include: []
  }
})

import { defineConfig } from "vite"
import path from "path"
import { fileURLToPath } from "url"
import { createHtmlPlugin } from "vite-plugin-html"

// Compatibilidade com ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(({ mode }) => {
  // Detecta se deve minificar baseado no comando
  const shouldMinify = mode === "production-min"

  console.log(`🔨 Build mode: ${shouldMinify ? "MINIFICADO" : "NÃO MINIFICADO"}`)

  return {
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

      // Minifica JS apenas se shouldMinify for true
      minify: shouldMinify ? "terser" : false,

      sourcemap: false,

      // Opções do Rollup
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html")
        },
        output: {
          // Estrutura de saída dos arquivos
          entryFileNames: shouldMinify ? "assets/js/[name].min.js" : "assets/js/[name].js",

          chunkFileNames: shouldMinify ? "assets/js/[name].min.js" : "assets/js/[name].js",

          assetFileNames: assetInfo => {
            const info = assetInfo.name.split(".")
            const ext = info[info.length - 1]

            // CSS
            if (ext === "css") {
              return shouldMinify ? "assets/css/[name].min[extname]" : "assets/css/[name][extname]"
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
          },

          // IMPORTANTE: Impede quebra em múltiplos chunks
          // Força tudo em um único arquivo
          manualChunks: undefined,
          inlineDynamicImports: true
        }
      },

      // Opções do Terser (apenas se minificar)
      terserOptions: shouldMinify
        ? {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ["console.log", "console.info", "console.debug"]
            },
            format: {
              comments: false
            }
          }
        : undefined,

      // Minificação de CSS (controlada por shouldMinify)
      cssMinify: shouldMinify,

      // Otimizações
      target: "es2015",
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1000,

      // Garante que CSS seja extraído em arquivo único
      cssCodeSplit: false
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
        // Minifica HTML apenas se shouldMinify for true
        minify: shouldMinify
          ? {
              removeComments: true,
              collapseWhitespace: true,
              collapseInlineTagWhitespace: false,
              minifyCSS: true,
              minifyJS: true,
              removeEmptyAttributes: false,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              removeRedundantAttributes: false,
              useShortDoctype: true,
              removeOptionalTags: false,
              removeAttributeQuotes: false,
              minifyURLs: false,
              sortAttributes: false,
              sortClassName: false,
              preserveLineBreaks: false,
              conservativeCollapse: true,
              collapseBooleanAttributes: false,
              caseSensitive: true,
              ignoreCustomFragments: [/<\?[\s\S]*?\?>/, /<%[\s\S]*?%>/]
            }
          : false,

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
  }
})

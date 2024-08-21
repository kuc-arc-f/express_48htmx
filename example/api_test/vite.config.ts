import { defineConfig } from 'vite'
//
export default defineConfig(async({ mode }) => {
  if (mode === 'client') {
    return {
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      build: {
        minify: false,
        lib: {
          entry: "./src/main.ts",
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './public/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
    }
  }
})
/*
formats: ['es', 'cjs'],
*/
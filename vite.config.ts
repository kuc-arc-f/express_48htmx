import { defineConfig } from 'vite'
//
export default defineConfig(async({ mode }) => {
  if (mode === 'client') {
    return {
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      build: {
        lib: {
          entry: "./src/entry-client.ts",
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
define: {
  "process.env.NODE_ENV": '"production"',
},
*/
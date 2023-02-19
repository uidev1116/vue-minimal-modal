import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueModal',
      fileName: 'vue-modal',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          react: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    eslint({
      extensions: ['js', 'ts', 'vue'],
      exclude: ['/node_modules/'],
      emitError: true,
      emitWarning: true,
      failOnError: false,
      fix: true,
    }),
    stylelint({
      include: ['scss/*.scss'],
      emitError: true,
      emitWarning: true,
      fix: true,
    }),
  ],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@apis',
        replacement: path.resolve(__dirname, 'src/apis'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/constants'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
      {
        find: '@layout',
        replacement: path.resolve(__dirname, 'src/layout'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@stores',
        replacement: path.resolve(__dirname, 'src/stores'),
      },
      {
        find: '@test',
        replacement: path.resolve(__dirname, 'src/test'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
    ]
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://43.202.16.119:8080', // HTTP 백엔드 주소
        changeOrigin: true,
        secure: false, // HTTPS 검증 비활성화
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api'를 제거
      },
      '/': {
        target: 'http://43.202.16.119:8080', // HTTP 백엔드 주소
        changeOrigin: true,
        secure: false, // HTTPS 검증 비활성화
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api'를 제거
      },
    },
  },
})

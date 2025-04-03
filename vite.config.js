import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/techvy/',
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-styled-components', {
            displayName: true,
            fileName: false
          }]
        ]
      }
    })
  ],
  server: {
    host: true, // Listen on all addresses
    port: 5173,
    allowedHosts: [
      '9f5b-152-58-85-179.ngrok-free.app'
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})

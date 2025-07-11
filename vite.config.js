import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',
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
    host: true, 
    port: 5173,
    allowedHosts: [
      'aa5ea45fb4d9.ngrok-free.app'
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})

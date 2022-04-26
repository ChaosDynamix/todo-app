import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': resolve(__dirname, 'src/assets'),
            '@components': resolve(__dirname, 'src/components'),
            '@constants': resolve(__dirname, 'src/constants'),
            '@containers': resolve(__dirname, 'src/containers'),
            '@reducers': resolve(__dirname, 'src/reducers'),
            '@actions': resolve(__dirname, 'src/actions'),
            '@selectors': resolve(__dirname, 'src/selectors'),
        },
    },
})

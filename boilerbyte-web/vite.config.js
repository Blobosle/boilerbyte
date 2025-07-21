import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                man: resolve(__dirname, 'man/index.html'),
                courses: resolve(__dirname, 'courses/index.html'),
                cs240: resolve(__dirname, 'courses/cs240/index.html'),
                cs250: resolve(__dirname, 'courses/cs250/index.html'),
                cs251: resolve(__dirname, 'courses/cs251/index.html'),
            }
        }
    }
})

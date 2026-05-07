import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'vue-router/vite'

export default defineConfig({
    plugins: [
        VueRouter({
            routesFolder: 'resources/js/pages'
        }),

        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true
        }),
        tailwindcss(),
        vue()
    ],

    // server: {
    //     host: '0.0.0.0',
    //     port: 5173,

    //     // 🔥 THIS FIXES YOUR ERROR
    //     cors: {
    //         origin: '*' // or 'http://192.168.8.42:8000'
    //     },

    //     hmr: {
    //         host: '192.168.8.42',
    //         protocol: 'ws'
    //     }
    // }
})

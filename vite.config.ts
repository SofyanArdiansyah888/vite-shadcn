import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import {TanStackRouterVite} from "@tanstack/router-vite-plugin";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        TanStackRouterVite()
    ],
    server: {
        port: 8888
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },

    },
})

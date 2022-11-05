import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            $pages: path.resolve(__dirname, './src/pages'),
            $shared: path.resolve(__dirname, './src/shared'),
        },
    },
    plugins: [react()],
});

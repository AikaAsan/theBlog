import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import 'dotenv/config';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr({ exportAsDefault: true })],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(process.env.API_URL || 'http://localhost:5000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
    css: {
        modules: {
            generateScopedName: '[path][name]__[local]--[hash:base64:5]',
        },
    },
});

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        outDir: '../../public/build-admin',
        emptyOutDir: true,
        manifest: true,
    },
    plugins: [
        laravel({
            publicDirectory: '../../public',
            buildDirectory: 'build-admin',
            input: [
                __dirname + '/resources/assets/sass/app.scss',
                __dirname + '/resources/js/app.tsx'
            ],
            refresh: true,
        }),
    ],
});

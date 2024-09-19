import './bootstrap';
import '../css/app.css';

import { createRoot, hydrateRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob([
            './Pages/**/*.tsx',
            '../../Modules/*/resources/js/Pages/**/*.{jsx,tsx}'
        ]);

        const regex = /([^:]+)::(.+)/;
        const matches = regex.exec(name);

        if (matches && matches.length > 2) {
            const moduleName = matches[1].charAt(0).toUpperCase() + matches[1].slice(1).toLowerCase();
            const pageName = matches[2];

            const modulePathPattern = `../../Modules/${moduleName}/resources/js/Pages/*/${pageName}.tsx`;

            const path = Object.keys(pages).find(path => new RegExp(modulePathPattern.replace('/*', '.*')).test(path));

            return path ? pages[path]() : Promise.reject(new Error(`Module page not found: ${modulePathPattern}`));
        } else {
            const mainPath = `./Pages/${name}.tsx`;

            return pages[mainPath] ? pages[mainPath]() : Promise.reject(new Error(`Main page not found: ${mainPath}`));
        }
    },
    setup({el, App, props}) {
        if (import.meta.env.DEV) {
            createRoot(el).render(<App {...props} />);
        } else {
            hydrateRoot(el, <App {...props} />);
        }
    },
    progress: {
        color: '#4B5563',
    },
}).then(r => '');

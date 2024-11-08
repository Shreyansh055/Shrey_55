import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  base: "/Shrey_55/",
  plugins: [
    { enforce: 'pre', ...mdx() },  // Adds MDX support before other plugins
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),  // Enables React and MDX support for JS/JSX/TS/TSX and MDX files
  ],
  resolve: {
    alias: {
      // Example alias: '@components': '/src/components' 
      // You can add any custom alias for cleaner imports if needed
    },
  },
  build: {
    // Custom build options go here if you want to configure output, optimization, etc.
    // Example:
    // outDir: 'build',  // Custom build output directory
    // sourcemap: true,  // Enable sourcemaps for easier debugging
  },
  server: {
    // Example: Configure dev server settings here (port, proxy, etc.)
    // port: 3000,  // Change the default dev server port
    // proxy: {
    //   '/api': 'http://localhost:5000', // Set up proxy if you have a backend
    // },
  },
});

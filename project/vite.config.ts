import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // 👈 Install this plugin

export default defineConfig({
  base: '/static/', // 👈 So Vite uses correct paths for Django
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/**/*',   // 👈 All your local assets
          dest: 'assets'            // 👈 Will be available at /static/assets/
        }
      ]
    })
  ],
  build: {
    outDir: '../project/static',  // 👈 Django's static/ folder
    emptyOutDir: true
  }
});

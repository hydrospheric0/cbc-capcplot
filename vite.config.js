import { defineConfig } from 'vite';

export default defineConfig({
  // This is a static HTML site; no bundling needed.
  // `index.html` redirects to `species_plot.html`.
  server: {
    port: 5173,
    strictPort: true
  },
  preview: {
    port: 4173,
    strictPort: true
  }
});

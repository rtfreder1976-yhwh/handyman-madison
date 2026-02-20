// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://madisonhandymanpro.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://madisonhandymanpro.com/',
        'https://madisonhandymanpro.com/services/',
        'https://madisonhandymanpro.com/locations/',
        'https://madisonhandymanpro.com/about/',
        'https://madisonhandymanpro.com/contact/'
      ],
      serialize(item) {
        // Set custom priorities based on page importance
        if (item.url === 'https://madisonhandymanpro.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url.includes('/services')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/contact')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/locations')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/about')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ]
});

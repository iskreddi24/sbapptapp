// // import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';
// // import { VitePWA } from 'vite-plugin-pwa';

// // export default defineConfig({
// //   plugins: [
// //     react(),
// //     VitePWA({
// //       registerType: 'autoUpdate',
// //       includeAssets: ['SBALOGO.png', 'favicon.svg', 'robots.txt'],
// //       manifest: {
// //         name: 'Media Proposal Generator',
// //         short_name: 'MediaPortal',
// //         description: 'Professional PPT & PDF Submission Tool for SBA, OUTSPACE & YUVA',
// //         theme_color: '#1e293b',
// //         background_color: '#ffffff',
// //         display: 'standalone',
// //         orientation: 'any',
// //         scope: '/',
// //         start_url: '/',
// //         categories: ['business', 'productivity'],
// //         icons: [
// //           { src: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
// //           { src: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
// //           { src: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
// //         ],
// //         shortcuts: [
// //           {
// //             name: 'Dashboard',
// //             short_name: 'Dashboard',
// //             url: '/dashboard',
// //             icons: [{ src: '/icons/icon-192x192.png', sizes: '192x192' }],
// //           },
// //         ],
// //       },
// //       workbox: {
// //         globDirectory: 'dist',
// //         globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,woff,ttf,eot}'],
// //         runtimeCaching: [
// //           {
// //             urlPattern: /^https?:\/\/[^/]+\/media(\?.*)?$/i,
// //             handler: 'NetworkFirst',
// //             options: {
// //               cacheName: 'api-media-cache',
// //               expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 },
// //               cacheableResponse: { statuses: [0, 200] },
// //               networkTimeoutSeconds: 10,
// //             },
// //           },
// //           {
// //             urlPattern: /\/uploads\/.*\.(png|jpg|jpeg|webp|gif|svg)$/i,
// //             handler: 'CacheFirst',
// //             options: {
// //               cacheName: 'media-images-cache',
// //               expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
// //               cacheableResponse: { statuses: [0, 200] },
// //             },
// //           },
// //           {
// //             urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
// //             handler: 'StaleWhileRevalidate',
// //             options: { cacheName: 'google-fonts-stylesheets' },
// //           },
// //           {
// //             urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
// //             handler: 'CacheFirst',
// //             options: {
// //               cacheName: 'google-fonts-webfonts',
// //               expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
// //               cacheableResponse: { statuses: [0, 200] },
// //             },
// //           },
// //           { urlPattern: /\/auth\/.*/i, handler: 'NetworkOnly' },
// //           { urlPattern: /\/admin\/.*/i, handler: 'NetworkOnly' },
// //         ],
// //         navigateFallback: '/index.html',
// //         navigateFallbackDenylist: [/^\/api\//],
// //         cleanupOutdatedCaches: true,
// //         skipWaiting: true,
// //         clientsClaim: true,
// //       },
// //       devOptions: { enabled: false },
// //     }),
// //   ],
// //   build: {
// //     rollupOptions: {
// //       output: {
// //         manualChunks: {
// //           vendor: ['react', 'react-dom', 'react-router-dom'],
// //           icons: ['react-icons/fa'],
// //         },
// //       },
// //     },
// //     chunkSizeWarningLimit: 1000,
// //   },
// // });
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { VitePWA } from 'vite-plugin-pwa';

// const API_ORIGIN = 'https://mediabackend-production.up.railway.app';

// export default defineConfig({
//   plugins: [
//     react(),

//     VitePWA({
//       registerType: 'autoUpdate',

//       includeAssets: [
//         'SBALOGO.png',
//         'favicon.svg',
//         'robots.txt',
//       ],

//       manifest: {
//         name: 'Media Proposal Generator',
//         short_name: 'MediaPortal',
//         description: 'Professional PPT & PDF Submission Tool for SBA, OUTSPACE & YUVA',

//         theme_color: '#1e293b',
//         background_color: '#ffffff',

//         display: 'standalone',
//         orientation: 'any',

//         scope: '/',
//         start_url: '/',

//         categories: ['business', 'productivity'],

//         icons: [
//           {
//             src: '/icons/icon-192x192.png',
//             sizes: '192x192',
//             type: 'image/png',
//           },
//           {
//             src: '/icons/icon-512x512.png',
//             sizes: '512x512',
//             type: 'image/png',
//           },
//           {
//             src: '/icons/icon-512x512.png',
//             sizes: '512x512',
//             type: 'image/png',
//             purpose: 'maskable',
//           },
//         ],

//         shortcuts: [
//           {
//             name: 'Dashboard',
//             short_name: 'Dashboard',
//             url: '/dashboard',
//             icons: [
//               {
//                 src: '/icons/icon-192x192.png',
//                 sizes: '192x192',
//               },
//             ],
//           },
//         ],
//       },

//       workbox: {
//         cleanupOutdatedCaches: true,
//         skipWaiting: true,
//         clientsClaim: true,

//         globPatterns: [
//           '**/*.{js,css,html,png,svg,ico,woff,woff2,ttf,eot}',
//         ],

//         runtimeCaching: [

//           // ===========================
//           // LOGIN / AUTH
//           // ===========================

//           {
//             urlPattern: ({ url }) =>
//               url.origin === API_ORIGIN &&
//               url.pathname.startsWith('/api/auth'),

//             handler: 'NetworkOnly',
//           },

//           // ===========================
//           // MEDIA API
//           // ===========================

//           {
//             urlPattern: ({ url }) =>
//               url.origin === API_ORIGIN &&
//               url.pathname.startsWith('/api/media'),

//             handler: 'NetworkOnly',
//           },

//           // ===========================
//           // ADMIN API
//           // ===========================

//           {
//             urlPattern: ({ url }) =>
//               url.origin === API_ORIGIN &&
//               url.pathname.startsWith('/api/admin'),

//             handler: 'NetworkOnly',
//           },

//           // ===========================
//           // IMAGE UPLOADS
//           // ===========================

//           {
//             urlPattern: ({ url }) =>
//               url.origin === API_ORIGIN &&
//               url.pathname.startsWith('/uploads'),

//             handler: 'CacheFirst',

//             options: {
//               cacheName: 'media-images',

//               expiration: {
//                 maxEntries: 300,
//                 maxAgeSeconds: 60 * 60 * 24 * 30,
//               },

//               cacheableResponse: {
//                 statuses: [0, 200],
//               },
//             },
//           },

//           // ===========================
//           // GOOGLE FONTS CSS
//           // ===========================

//           {
//             urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,

//             handler: 'StaleWhileRevalidate',

//             options: {
//               cacheName: 'google-fonts-css',
//             },
//           },

//           // ===========================
//           // GOOGLE FONT FILES
//           // ===========================

//           {
//             urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,

//             handler: 'CacheFirst',

//             options: {
//               cacheName: 'google-fonts',

//               expiration: {
//                 maxEntries: 30,
//                 maxAgeSeconds: 60 * 60 * 24 * 365,
//               },

//               cacheableResponse: {
//                 statuses: [0, 200],
//               },
//             },
//           },
//         ],

//         navigateFallback: '/index.html',

//         navigateFallbackDenylist: [
//           /^\/api\//,
//         ],
//       },

//       devOptions: {
//         enabled: false,
//       },
//     }),
//   ],

//   build: {
//     chunkSizeWarningLimit: 1000,

//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: [
//             'react',
//             'react-dom',
//             'react-router-dom',
//           ],

//           icons: [
//             'react-icons/fa',
//           ],
//         },
//       },
//     },
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'SBALOGO.png',
        'favicon.svg',
        'robots.txt',
      ],

      manifest: {
        name: 'Media Proposal Generator',
        short_name: 'MediaPortal',
        description:
          'Professional PPT & PDF Submission Tool for SBA, OUTSPACE & YUVA',

        theme_color: '#1e293b',
        background_color: '#ffffff',

        display: 'standalone',
        orientation: 'any',

        scope: '/',
        start_url: '/',

        categories: ['business', 'productivity'],

        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],

        shortcuts: [
          {
            name: 'Dashboard',
            short_name: 'Dashboard',
            url: '/dashboard',
            icons: [
              {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
              },
            ],
          },
        ],
      },

      workbox: {
        cleanupOutdatedCaches: true,

        skipWaiting: true,

        clientsClaim: true,

        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,woff,woff2,ttf,eot}',
        ],

        runtimeCaching: [
          // Cache uploaded images only
          {
            urlPattern:
              /^https:\/\/mediabackend-production\.up\.railway\.app\/uploads\/.*/i,

            handler: 'CacheFirst',

            options: {
              cacheName: 'media-images',

              expiration: {
                maxEntries: 300,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },

              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          // Google Fonts CSS
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,

            handler: 'StaleWhileRevalidate',

            options: {
              cacheName: 'google-fonts-css',
            },
          },

          // Google Fonts Files
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,

            handler: 'CacheFirst',

            options: {
              cacheName: 'google-fonts',

              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },

              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],

        navigateFallback: '/index.html',

        navigateFallbackDenylist: [
          /^\/api\//,
        ],
      },

      devOptions: {
        enabled: false,
      },
    }),
  ],

  build: {
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
          ],

          icons: [
            'react-icons/fa',
          ],
        },
      },
    },
  },
});

# Media Portal Frontend — Enterprise PWA

Complete frontend application with PWA capabilities, offline support, and responsive design.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Generate PWA icons (place SBALOGO.png in public/ first)
npm run generate-icons
# OR manually: convert public/SBALOGO.png -resize 192x192 public/icons/icon-192x192.png

# 3. Development
npm run dev

# 4. Production build
npm run build

# 5. Preview production
npm run preview
```

## Environment

Create `.env`:
```
VITE_API_URL=http://your-backend-url
```

## File Structure (49 files)

```
├── index.html              ← PWA meta tags + splash screen
├── package.json            ← vite-plugin-pwa + workbox-window
├── vite.config.js          ← PWA config + Workbox caching
├── vercel.json             ← SPA routing
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── icons/              ← Generate from SBALOGO.png
│
├── scripts/
│   └── generate-icons.js
│
└── src/
    ├── main.jsx            ← Entry + SW registration
    ├── App.jsx             ← Routes + PWA overlays
    │
    ├── pwa/
    │   ├── registerSW.js
    │   ├── useInstallPrompt.js
    │   ├── useOnlineStatus.js
    │   └── useUpdatePrompt.js
    │
    ├── context/
    │   ├── AuthContext.jsx
    │   └── MediaContext.jsx
    │
    ├── services/
    │   ├── api.js           ← Axios + interceptors
    │   ├── adminService.js
    │   └── mediaService.js
    │
    ├── pages/
    │   ├── Login.jsx
    │   ├── Welcome.jsx
    │   ├── Dashboard.jsx
    │   └── AdminDashboard.jsx
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx
    │   │   └── Sidebar.jsx
    │   ├── media/
    │   │   ├── MediaGrid.jsx
    │   │   ├── AdminMediaGrid.jsx
    │   │   ├── AddMediaModal.jsx
    │   │   ├── EditMediaModal.jsx
    │   │   ├── BulkCodesModal.jsx
    │   │   └── BulkImageUploadModal.jsx
    │   ├── common/
    │   │   └── CompanyModal.jsx
    │   ├── admin/
    │   │   └── AddUserModal.jsx
    │   └── pwa/
    │       ├── InstallPrompt.jsx
    │       ├── UpdateNotification.jsx
    │       ├── NetworkStatus.jsx
    │       ├── OfflinePage.jsx
    │       └── SkeletonLoader.jsx
    │
    ├── db/
    │   └── indexedDB.js
    │
    ├── utils/
    │   ├── localStorage.js
    │   └── backgroundSync.js
    │
    └── styles/
        ├── variables.css
        ├── Login.css
        ├── Form.css
        ├── Modal.css
        ├── Navbar.css
        ├── Sidebar.css
        ├── Dashboard.css
        ├── MediaGrid.css
        ├── Welcome.css
        ├── AdminDashboard.css
        ├── pwa.css
        └── responsive.css
```

## Features

- ✅ Installable PWA (Android/iOS/Desktop)
- ✅ Offline support with cached content
- ✅ Background sync for failed requests
- ✅ IndexedDB for downloads, images, queue
- ✅ Persisted filters, search, scroll position
- ✅ Auto-update with notification
- ✅ Splash screen with animation
- ✅ Network status indicator
- ✅ Skeleton loading placeholders
- ✅ Responsive: 320px → 4K + landscape + tablets
- ✅ Safe area insets for notch devices
- ✅ 44px touch targets
- ✅ Accessibility (ARIA, focus states, reduced motion)
- ✅ All existing features preserved
- ✅ No API/backend changes

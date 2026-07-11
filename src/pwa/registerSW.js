export function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
        setInterval(() => registration.update(), 60 * 60 * 1000);
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'activated') {
                window.dispatchEvent(new CustomEvent('sw-updated'));
              }
            });
          }
        });
        console.log('SW registered:', registration.scope);
      } catch (error) {
        console.error('SW registration failed:', error);
      }
    });
  }
}

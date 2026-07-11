import { useState, useEffect, useCallback } from 'react';

export function useUpdatePrompt() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    const handler = () => setUpdateAvailable(true);
    window.addEventListener('sw-updated', handler);
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then((reg) => { if (reg && reg.waiting) setUpdateAvailable(true); });
    }
    return () => window.removeEventListener('sw-updated', handler);
  }, []);

  const update = useCallback(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (reg && reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        window.location.reload();
      });
    }
  }, []);

  return { updateAvailable, update };
}

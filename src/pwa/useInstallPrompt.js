import { useState, useEffect, useCallback } from 'react';

export function useInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handler = (e) => { e.preventDefault(); setDeferredPrompt(e); setIsInstallable(true); };
    const installedHandler = () => { setIsInstalled(true); setIsInstallable(false); setDeferredPrompt(null); };
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    if (isStandalone) setIsInstalled(true);
    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', installedHandler);
    return () => { window.removeEventListener('beforeinstallprompt', handler); window.removeEventListener('appinstalled', installedHandler); };
  }, []);

  const install = useCallback(async () => {
    if (!deferredPrompt) return false;
    try { deferredPrompt.prompt(); const { outcome } = await deferredPrompt.userChoice; setDeferredPrompt(null); setIsInstallable(false); return outcome === 'accepted'; }
    catch (error) { console.error('Install prompt error:', error); return false; }
  }, [deferredPrompt]);

  return { isInstallable, isInstalled, install };
}

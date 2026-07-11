import { useInstallPrompt } from '../../pwa/useInstallPrompt';
import { FaDownload, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function InstallPrompt() {
  const { isInstallable, isInstalled, install } = useInstallPrompt();
  const [dismissed, setDismissed] = useState(false);

  if (isInstalled || !isInstallable || dismissed) return null;

  return (
    <div className="pwa-install-banner" role="alert" aria-label="Install application">
      <div className="pwa-install-content">
        <FaDownload className="pwa-install-icon" />
        <div className="pwa-install-text">
          <strong>Install App</strong>
          <span>Get the full native experience — fast, offline-ready, home screen access</span>
        </div>
      </div>
      <div className="pwa-install-actions">
        <button className="pwa-btn-install" onClick={install}>Install</button>
        <button className="pwa-btn-dismiss" onClick={() => setDismissed(true)} aria-label="Dismiss"><FaTimes /></button>
      </div>
    </div>
  );
}

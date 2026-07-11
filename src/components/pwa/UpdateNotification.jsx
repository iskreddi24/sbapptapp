import { useUpdatePrompt } from '../../pwa/useUpdatePrompt';
import { FaSync, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function UpdateNotification() {
  const { updateAvailable, update } = useUpdatePrompt();
  const [dismissed, setDismissed] = useState(false);

  if (!updateAvailable || dismissed) return null;

  return (
    <div className="pwa-update-banner" role="alert" aria-label="App update available">
      <div className="pwa-update-content">
        <FaSync className="pwa-update-icon" />
        <div className="pwa-update-text">
          <strong>New Update Available</strong>
          <span>A new version is ready. Refresh to get the latest features.</span>
        </div>
      </div>
      <div className="pwa-update-actions">
        <button className="pwa-btn-update" onClick={update}>Update Now</button>
        <button className="pwa-btn-dismiss" onClick={() => setDismissed(true)} aria-label="Dismiss"><FaTimes /></button>
      </div>
    </div>
  );
}

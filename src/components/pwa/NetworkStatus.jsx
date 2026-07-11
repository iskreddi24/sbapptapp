import { useOnlineStatus } from '../../pwa/useOnlineStatus';
import { FaWifi, FaExclamationCircle } from 'react-icons/fa';

export default function NetworkStatus() {
  const { isOnline, wasOffline } = useOnlineStatus();

  if (isOnline && !wasOffline) return null;

  return (
    <div className={`pwa-network-status ${isOnline ? 'pwa-network-restored' : 'pwa-network-offline'}`} role="status" aria-live="polite">
      {isOnline ? (<><FaWifi /> <span>Connection restored</span></>) : (<><FaExclamationCircle /> <span>You are offline — some features may be limited</span></>)}
    </div>
  );
}

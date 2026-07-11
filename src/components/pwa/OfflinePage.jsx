import { FaWifiSlash, FaRedoAlt, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function OfflinePage() {
  const navigate = useNavigate();

  const handleRetry = () => {
    if (navigator.onLine) { navigate('/dashboard'); }
    else { window.location.reload(); }
  };

  return (
    <div className="offline-page" role="main">
      <div className="offline-card">
        <div className="offline-icon-wrapper"><FaWifiSlash className="offline-icon" /></div>
        <h1 className="offline-title">No Internet Connection</h1>
        <p className="offline-subtitle">Please check your network settings and try again.</p>
        <div className="offline-status">
          <span className={`status-dot ${navigator.onLine ? 'online' : 'offline'}`}></span>
          <span>{navigator.onLine ? 'Connected' : 'Disconnected'}</span>
        </div>
        <div className="offline-actions">
          <button className="offline-btn-primary" onClick={handleRetry}><FaRedoAlt /> Retry</button>
          <button className="offline-btn-secondary" onClick={() => navigate('/')}><FaHome /> Back Home</button>
        </div>
      </div>
    </div>
  );
}

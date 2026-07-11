import { FaWifi, FaRedo, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function OfflinePage() {
  const navigate = useNavigate();

  const handleRetry = () => {
    if (navigator.onLine) {
      navigate("/dashboard");
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="offline-page" role="main">
      <div className="offline-card">
        <div className="offline-icon-wrapper">
          <FaWifi className="offline-icon" />
        </div>

        <h1 className="offline-title">
          No Internet Connection
        </h1>

        <p className="offline-subtitle">
          Please check your network connection and try again.
        </p>

        <div className="offline-status">
          <span
            className={`status-dot ${
              navigator.onLine ? "online" : "offline"
            }`}
          ></span>

          <span>
            {navigator.onLine ? "Connected" : "Disconnected"}
          </span>
        </div>

        <div className="offline-actions">
          <button
            className="offline-btn-primary"
            onClick={handleRetry}
          >
            <FaRedo />
            <span style={{ marginLeft: "8px" }}>Retry</span>
          </button>

          <button
            className="offline-btn-secondary"
            onClick={() => navigate("/")}
          >
            <FaHome />
            <span style={{ marginLeft: "8px" }}>Back Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}
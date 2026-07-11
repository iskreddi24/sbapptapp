import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/variables.css';
import './styles/pwa.css';
import './styles/responsive.css';
import { registerSW } from './pwa/registerSW.js';

registerSW();

const removeSplash = () => {
  const splash = document.getElementById('splash-screen');
  if (splash) {
    splash.classList.add('splash-fade');
    setTimeout(() => splash.remove(), 600);
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App onReady={removeSplash} />
  </React.StrictMode>,
);

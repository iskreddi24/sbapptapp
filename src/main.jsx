import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/variables.css";
import "./styles/pwa.css";
import "./styles/responsive.css";

import { registerSW } from "./pwa/registerSW.js";

registerSW();

function Root() {
  useEffect(() => {
    const splash = document.getElementById("splash-screen");

    if (splash) {
      splash.classList.add("splash-fade");

      setTimeout(() => {
        splash.remove();
      }, 600);
    }
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components
function StrictApp() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<StrictApp />);

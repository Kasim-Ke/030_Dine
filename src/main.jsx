import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css"; // Global styles
import App from "./App.jsx"; // Main App component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router basename="/030_dine">
      <App />
    </Router>
  </StrictMode>
);

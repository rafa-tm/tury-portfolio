import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./providers/theme.jsx";
import VLibras from "@djpfs/react-vlibras";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <VLibras />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

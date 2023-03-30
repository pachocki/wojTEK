import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MouseContextProvider from "./context/MouseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
    <MouseContextProvider>
      <App />
      </MouseContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);

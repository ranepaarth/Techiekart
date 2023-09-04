import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FIlterContextProvider } from "./context/filterContext.jsx";
import { AppProvider } from "./context/ProductContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FIlterContextProvider>
        <App />
      </FIlterContextProvider>
    </AppProvider>
  </React.StrictMode>
);

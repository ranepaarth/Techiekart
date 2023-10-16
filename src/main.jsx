import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartContextProvider } from "./context/cartContext.jsx";
// import { CartProvider } from "./context/cartContext.jsx";
import { FIlterContextProvider } from "./context/filterContext.jsx";
import { AppProvider } from "./context/ProductContext.jsx";
import { WishlistContextProvider } from "./context/wishListContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FIlterContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
          <App />
          </WishlistContextProvider>
        </CartContextProvider>
      </FIlterContextProvider>
    </AppProvider>
  </React.StrictMode>
);

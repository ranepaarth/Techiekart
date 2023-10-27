import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartContextProvider } from "./context/cartContext.jsx";
// import { CartProvider } from "./context/cartContext.jsx";
import { FIlterContextProvider } from "./context/filterContext.jsx";
import { AppProvider } from "./context/ProductContext.jsx";
import { WishlistContextProvider } from "./context/wishListContext.jsx";
import "./index.css";

const domainName = import.meta.env.VITE_DOMAIN_NAME;
const clientId = import.meta.env.VITE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domainName}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppProvider>
        <FIlterContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <App />
            </WishlistContextProvider>
          </CartContextProvider>
        </FIlterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);

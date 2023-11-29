import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import ProductPage from "./pages/ProductPage";
// import Footer from "./components/Footer";
import RootLayout from "./Layouts/RootLayout";
import WishList from "./pages/WishList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<ProductPage />} />
      <Route path="wishList" element={<WishList />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

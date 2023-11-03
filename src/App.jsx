import React from "react";
import {
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
// import Footer from "./components/Footer";
import WishList from "./pages/WishList";

import RootLayout from "./Layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    // include the <Header /> & <BackToTop /> compo inside  <RootLayout />
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<ProductPage />} />
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

/*// return (
  //   <Router>
  //     <Header />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/products" element={<ProductPage />} />
  //       <Route path="/wishList" element={<WishList />} />
  //       <Route path="/cart" element={<Cart />} />
  //       <Route path="*" element={<ErrorPage />} />
  //     </Routes>
  //      <Footer /> 
  //     <BackToTop />
  //   </Router>
  // ); */

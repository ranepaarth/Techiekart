import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Navbar/Header";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
// import Footer from "./components/Footer";
import WishList from "./pages/WishList";
import BackToTop from "./components/BackToTop";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <Footer /> */}
      <BackToTop />
    </Router>
  );
};

export default App;

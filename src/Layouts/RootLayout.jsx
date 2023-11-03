import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Navbar/Header";
import BackToTop from "../components/BackToTop";

const RootLayout = () => {
  return (
    <>
      <Header />
      <BackToTop/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import Header from "../components/Navbar/Header";
import { useProductContext } from "../context/ProductContext";
import LoadingLayout from "./LoadingLayout";

const RootLayout = () => {
  const { isLoading } = useProductContext();
  if (isLoading) return <LoadingLayout />;
  return (
    <>
      <Header />
      <BackToTop />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

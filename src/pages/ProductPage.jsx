import React from "react";
import GridView from "../components/Main/GridView";
import SortSection from "../components/Main/SortSection";

import { useFilterContext } from "../context/filterContext";

const ProductPage = () => {
  const { filter_products } = useFilterContext();

  return (
    <div className="flex justify-center items-center mx-8 pt-[7rem] md:pt-[7.5rem] lg:pt-[9.5rem] scroll-smooth">
      <main className="min-w-full">
        <header className="p-2 border rounded-lg shadow-sm bg-white">
          <SortSection />
        </header>
        <GridView products={filter_products} />
      </main>
    </div>
  );
};

export default ProductPage;

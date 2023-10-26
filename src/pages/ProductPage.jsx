import React from "react";

import Loading from "../components/Loading";
import GridView from "../components/Main/GridView";
import SortSection from "../components/Main/SortSection";
import FilterSection from "../components/SideBar/FilterSection";

import { useFilterContext } from "../context/filterContext";
import { useProductContext } from "../context/ProductContext";

const ProductPage = () => {
  const { isLoading } = useProductContext();
  const { filter_products } = useFilterContext();

  if (isLoading) return <Loading />;
  else {
    return (
      <>
        <div className="flex gap-4 pr-2 h-[100] pt-[6.05rem] lg:pt-[7.5rem] md:px-2">
          <div className="">
            <aside
              className={`border-r border-neutral-300 md:shadow-md h-full w-[28dvw] md:w-[27dvw] lg:w-[190px] xl:w-[230px] fixed`}
              // style={{ maxHeight: "100dvh" }}
            >
              <FilterSection />
            </aside>
          </div>

          {/* Products container */}
          <main className="ml-auto lg:ml-48 md:mr-3 pb-4">
            <header className="p-2 mt-3 border rounded-lg shadow-sm w-[64dvw] lg:w-[75dvw] xl:w-[79dvw] ml-auto xl:ml-[3rem]">
              <SortSection />
            </header>
            <GridView products={filter_products} />
          </main>
        </div>
      </>
    );
  }
};

export default ProductPage;

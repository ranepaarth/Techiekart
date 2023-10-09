import React from "react";

import FilterSection from "../components/FilterSection";
import Loading from "../components/Loading";
import SortSection from "../components/SortSection";
import GridView from "../components/GridView";
import ListView from "../components/ListView";

import { useFilterContext } from "../context/filterContext";
import { useProductContext } from "../context/ProductContext";


const ProductPage = () => {
  const { isLoading } = useProductContext();
  const { filter_products, grid_view } = useFilterContext();


  if (isLoading) return <Loading />;
  else {
    return (
      <>
        <div className="flex gap-4 pr-2 h-[100] pt-28 lg:pt-32 md:px-2">
          <div className="">
            <aside
              className={`bg-pink-200 h-[82dvh] lg:h-[80dvh] w-[28dvw] md:w-[27dvw] lg:w-[190px] xl:w-[230px] ml-2 fixed`}
              // style={{ maxHeight: "100dvh" }}
            >
              <FilterSection />
            </aside>
          </div>

          {/* Products container */}
          <main className="ml-auto lg:ml-48 md:mr-3">
            <header className="p-2 border rounded-lg shadow-sm w-[64dvw] lg:w-[75dvw] xl:w-[79dvw] ml-auto xl:ml-[3rem]">
              <SortSection />
            </header>
            {grid_view ? (
              <GridView products={filter_products} />
            ) : (
              <ListView products={filter_products} />
            )}
          </main>
        </div>
      </>
    );
  }
};

export default ProductPage;
{/* <section className="mt-4 w-[60dvw] md:w-[70dvw] lg:w-[83dvw] grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filter_products.map((currElem) => {
                return (
                  <article
                    key={currElem.id}
                    className="bg-pink-300 p-2 h-[25dvh]"
                  >
                    {setGridView ? <div>Grid</div> :<ProductList key={currElem.id} {...currElem} />}
                  </article>
                );
              })}
            </section> */}
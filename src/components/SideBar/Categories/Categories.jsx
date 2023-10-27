import React from "react";
import { useProductContext } from "../../../context/ProductContext";
import { useFilterContext } from "../../../context/filterContext";

import { useCartContext } from "../../../context/cartContext";

const Categories = () => {
  const { cart } = useCartContext();
  const { products } = useProductContext();
  const { setCategory } = useFilterContext();
  const allCategories = products.map((item) => item.category);
  const newCategory = ["all", ...new Set(allCategories)];
  // console.log(newCategory);

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <header className="border-b-2 border-purple-600 pb-2 text-sm md:text-base w-fit font-medium">
          <h3>Filter Categories</h3>
        </header>
      {/* {console.log(cart)} */}
        {newCategory.map((category, index) => {
          let total = 0;
          const productExists = cart.find((product) => {
            if (product.category === category) {
              total = total + 1;
              console.log(category, total);
            }
          });

          // console.log(productExists);
          return (
            <span
              key={index}
              className="text-xs capitalize md:text-sm relative group cursor-pointer hover:bg-purple-200 hover:pl-2 hover:font-medium hover:text-purple-700 w-full p-1 hover:border-r-4 hover:border-purple-600"
              onClick={() => setCategory(category)}
            >
              <main className="flex justify-between items-center gap-1 mt-1">
                <p>{category}</p>
                <p className="">{total !== 0 ? total : ""}</p>
              </main>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Categories;

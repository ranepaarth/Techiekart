import React from "react";
import { useFilterContext } from "../context/filterContext";
import { useProductContext } from "../context/ProductContext";

const Categories = () => {
  const { products } = useProductContext();
  const {setCategory} = useFilterContext();
  const allCategories = products.map((item) => item.category);
  const newCategory = ["all", ...new Set(allCategories)];
  // console.log(newCategory);
  return (
    <>

      <div className="flex flex-col gap-2 w-full">
        <header className="border-b-2 border-purple-600 pb-2 text-sm md:text-base w-fit font-medium">
          <h3>Filter Categories</h3>
        </header>
        
        {newCategory.map((category, index) => {
          return (
            <p key={index} className="text-xs capitalize md:text-sm relative group cursor-pointer hover:bg-purple-200 hover:pl-3 hover:font-medium hover:text-purple-700 w-full p-1" onClick={()=>setCategory(category)}>
              <span className="">{category}</span>
              {/* <span className="absolute -bottom-0 left-0 w-0 h-[0.05rem] bg-pink-600 transition-all group-hover:w-full"></span> */}
            </p>
            
          );
        })}
      </div>
    </>
  );
};

export default Categories;

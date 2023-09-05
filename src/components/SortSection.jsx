import React from "react";
import { useFilterContext } from "../context/filterContext";
import { BsGridFill, BsList } from "react-icons/bs";

const SortSection = () => {
  const { grid_view, setGridView, setListView, filter_products,sorting} =
    useFilterContext();
  // console.log(grid_view);
  return (
    <div className="text-sm flex justify-between items-center xl:px-28">
      <span className="flex gap-2 md:text-xl">
        <button
          className={`${
            grid_view ? "bg-pink-500 text-white" : "text-pink-600"
          } bg-pink-200 p-1 rounded-md`}
          onClick={setGridView}
        >
          <BsGridFill />
        </button>
        <button
          className={`
            ${
              grid_view ? "text-pink-600" : "bg-pink-500 text-white"
             } bg-pink-200 p-1 rounded-md`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </span>
      <span className="text-[10px] md:text-sm [font-weight:500] text-neutral-400">
        {filter_products.length} Product Available{" "}
      </span>
      <span className="text-[10px] md:text-base">
        <form action="#">
          <label htmlFor="sort">
            <select name="sort" id="sort" className="outline-none border p-1 rounded-md" onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              <option value="highest">Price(highest)</option>
              <option value="a-z">Products(A-Z)</option>
              <option value="z-a">Products(Z-A)</option>
            </select>
          </label>
        </form>
      </span>
    </div>
  );
};

export default SortSection;

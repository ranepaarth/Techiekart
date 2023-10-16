import React from "react";
import { useFilterContext } from "../context/filterContext";

const SortSection = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } =
    useFilterContext();
  // console.log(grid_view);
  return (
    <div className="text-sm flex justify-between items-center xl:px-28">
      {/* <span className="flex bg-purple-50 p-[0.2rem] md:text-xl rounded-md border">
        <button
          className={`${
            grid_view ? "bg-purple-600 text-white" : "text-purple-500"
          } bg-purple-200 p-1 rounded-md`}
          onClick={setGridView}
        >
          <BsGridFill />
        </button>
        <button
          className={`
            ${
              grid_view ? "text-purple-600" : "bg-purple-600 text-purple-200"
            } bg-purple-200 p-1 rounded-md`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </span> */}
      <span className="text-[10px] md:text-sm [font-weight:500] text-neutral-400">
        {filter_products.length} Product Available{" "}
      </span>
      <span className="text-[10px] md:text-base">
        <form action="#">
          <label htmlFor="sort">
            <select
              name="sort"
              id="sort"
              className="outline-none border p-1 rounded-md"
              onClick={sorting}
            >
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

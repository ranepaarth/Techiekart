import React from "react";
import { useFilterContext } from "../../context/filterContext";

const SortSection = () => {
  const { filter_products, sorting } = useFilterContext();
  return (
    <div className="text-sm flex justify-between items-center xl:px-28">
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

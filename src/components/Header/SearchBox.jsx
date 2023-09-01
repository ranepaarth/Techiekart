import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBox = () => {
  return (
    <div className="flex items-center gap-1 border-2 border-neutral-400 md:bg-neutral-200 w-[50vw] h-10 rounded-md">
              <span className="text-2xl  text-neutral-500 pl-2">
                <AiOutlineSearch />
              </span>
              <div className="text-xs flex text-center">
                <form onSubmit={(e) => e.preventDefault}>
                <input
                  type="text"
                  name="text"
                  // value={text}
                  // onChange={updateFilterValue}
                  placeholder="Search for items"
                  className="w-[40vw] bg-transparent placeholder:text-neutral-500  text-neutral-800 md:w-[45vw] outline-none"
                />
                </form>
              </div>
            </div>
  );
};

export default SearchBox;

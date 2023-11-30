import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import HorizontalLine from "../Navbar/HorizontalLine";

const LoadingHeader = () => {
  return (
    <>
        <header className="min-w-full bg-white h-fit p-2 flex flex-col">
          <div className="flex items-center justify-evenly gap-4 pb-2">
            <p className="h-10 w-10 bg-neutral-200 rounded-full"></p>
            <div className="flex items-center gap-1 border-2 border-neutral-400 md:bg-neutral-200 w-[50vw] h-10 rounded-md">
              <span className="text-2xl  text-neutral-500 pl-2">
                <AiOutlineSearch />
              </span>
              <span className="text-xs flex text-center">
                <input
                  type="text"
                  placeholder="Search for items"
                  className="w-[40vw] bg-transparent placeholder:text-neutral-500  text-neutral-800 md:w-[45vw] outline-none"
                />
              </span>
            </div>
            <div className="flex cursor-pointer gap-2 ">
                {[...Array(4)].map((_,i)=><span key={i} className="w-8 h-8 py-2 bg-neutral-200 rounded-full" ></span>)}
            </div>
          </div>
          <HorizontalLine />
          <div className="flex justify-evenly items-center text-xs lg:text-sm pt-2">
            {
                [...Array(4)].map((_,i) => <span key={i} className="text-transparent p-2 lg:p-3 rounded-md bg-neutral-200">Smartphones</span>)
            }
          </div>
        </header>
        <HorizontalLine />
    </>
  );
};

export default LoadingHeader;

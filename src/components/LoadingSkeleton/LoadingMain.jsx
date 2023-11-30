import React from "react";
import LoadingProductCard from "./LoadingProductCard";

const LoadingMain = () => {
  return (
    <main className="mt-5 flex flex-col gap-2 justify-center items-center mx-8">
      <div className="p-2 border rounded-lg bg-white w-full text-transparent flex justify-between items-center xl:px-28">FilterSection</div>
      <section className="mx-5 grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 my-2 xl:mt-5 gap-4 xl:gap-x-10 xl:gap-y-8 aspect-auto grow w-[90%]">
        {[...Array(20)].map((_,i)=><LoadingProductCard key={i}/>)}
      </section>
    </main>
  );
};

export default LoadingMain;

import React from "react";

const Home = () => {
  return (
    <main className="h-screen min-w-full bg-neutral-50 text-white grid place-items-center">
      <article className="h-[30%] w-[60%] bg-white text-black grid place-items-center rounded-xl shadow-lg cursor-pointer hover:scale-105">
        <span className="text-center">
          <h1 className="text-xl pb-4 md:text-2xl">Welcome to Technokart!!</h1>
          <p className="text-sm md:text-base">Feel free to navigate to other pages</p>
        </span>
      </article>
    </main>
  );
};
 
export default Home;

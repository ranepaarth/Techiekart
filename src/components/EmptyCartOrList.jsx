import React from "react";
import { NavLink } from "react-router-dom";
import EmptyCartIcon from "./CartComponent/EmptyCartIcon";

const EmptyCart = ({header,pageName,heroIcon}) => {
  return (
    <>
      <section className="pt-[6.5rem] flex flex-col items-center justify-between h-[100vh]">
        <header className="pt-5 text-3xl flex flex-col items-center font-bold">
          <h1 className="capitalize">{header}</h1>
          <span className="border-[3px] w-32 mt-5 border-purple-300"></span>
        </header> 
        <EmptyCartIcon Icon={heroIcon}/>
        <footer className="flex flex-col items-center mb-8 ">
          <h1 className="capitalize font-semibold text-2xl pb-5">
            your {pageName} is currently empty!{" "}
          </h1>
          <div className="font-medium text-neutral-500">
            {pageName === 'wishlist' ? "":(<p className="text-center text-xs px-2 py-1">
              Before proceed to checkout you must add some products to your cart
            </p>)}
            <p className="text-center text-xs">
              You will find a lot of interesting products on our "Products" page
            </p>
          </div>
          <NavLink to="/products">
            <button className="capitalize mt-8 bg-purple-500 py-2 px-5 rounded-full border-2 border-purple-500 text-white font-semibold hover:scale-110">
              return to products
            </button>
          </NavLink>
        </footer>
      </section>
    </>
  );
};

export default EmptyCart;

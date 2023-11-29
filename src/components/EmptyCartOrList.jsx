import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import EmptyCartIcon from "./CartComponent/EmptyCartIcon";

const EmptyCart = ({ header, pageName, heroIcon }) => {
  return (
    <div className="flex justify-center pt-[6rem] lg:pt-[9rem]">
      <section className=" flex flex-col items-center justify-between lg:w-[500px] h-[80vh] lg:h-[73vh] lg:border lg:shadow-md lg:rounded-md">
        <header className="pt-5 text-3xl flex flex-col items-center font-bold">
          <h1 className="capitalize">{header}</h1>
          <span className="border-[3px] w-32 mt-5 border-purple-300"></span>
        </header>
        <EmptyCartIcon Icon={heroIcon} />
        <footer className="flex flex-col items-center mb-8 ">
          <h1 className="capitalize font-semibold text-2xl pb-5">
            your {pageName} is currently empty!{" "}
          </h1>
          <div className="font-medium text-neutral-500">
            {pageName === "wishlist" ? (
              ""
            ) : (
              <p className="text-center text-xs px-2 py-1">
                Before proceed to checkout you must add some products to your
                cart
              </p>
            )}
            <p className="text-center text-xs">
              You will find a lot of interesting products on our "Products" page
            </p>
          </div>
          <NavLink to="/">
            <button className="capitalize mt-8 bg-purple-500 py-2 px-5 rounded-full border-2 border-purple-500 text-white font-semibold hover:scale-110">
              return to products
            </button>
          </NavLink>
        </footer>
      </section>
    </div>
  );
};

EmptyCart.propTypes = {
  header:PropTypes.string,
  pageName:PropTypes.string,
  heroIcon:PropTypes.string,
}

export default EmptyCart;

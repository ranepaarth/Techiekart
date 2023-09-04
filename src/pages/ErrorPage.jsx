import React from "react";
import NotFound from "../assets/not-found.svg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <section className="flex justify-center h-screen flex-col items-center font-Montserrat">
      <img src={NotFound} alt="not found" className="w-2/5 mt-24" />
      <h3 className="text-2xl font-medium py-5">Ohh! Page not Found</h3>
      <p className="text-sm md:text-xl">
        We can't seem to find the page you are looking for.
      </p>
      <h5 className="pt-5 md:text-xl">
        Please return to{" "}
        <Link
          to="/"
          className="bg-purple-500 p-2 border-2 border-transparent rounded-md font-extrabold text-purple-50 hover:bg-purple-300 hover:border-2 hover:border-purple-500"
        >
          Home
        </Link>
      </h5>
    </section>
  );
};

export default ErrorPage;

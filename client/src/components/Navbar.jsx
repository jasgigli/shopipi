import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container flex flex-wrap justify-between items-center my-4 mx-auto bg-white shadow-md py-4 px-8 rounded-lg border border-gray-200 max-w-6xl">
        <Link
          to="/"
          className="flex items-center mb-2 sm:mb-0 hover:opacity-90 transition duration-300"
        >
          <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Shopipi
          </span>
          <FaShoppingCart className="ml-3 text-indigo-600 text-3xl" />
        </Link>
        <div className="flex items-center text-2xl space-x-6 sm:justify-center md:justify-center lg:justify-end ">
          <Link
            to="/create"
            className="p-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition duration-300"
            title="Create Product"
          >
            <IoIosCreate />
          </Link>
          <button
            onClick={() => alert("Dark Mode Theme")}
            className="p-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition duration-300"
            title="Toggle Dark Mode"
          >
            <CgDarkMode />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

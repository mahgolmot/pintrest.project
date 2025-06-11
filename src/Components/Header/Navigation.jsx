import React, { useState } from "react";

export default function Navigation() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <>
      <nav className=" flex  items-center text-slate-300 bg-slate-900 p-4   md:container md:bg-transparent ">
        <div className="flex items-center">
          <h1 className="text-2xl mr-12">
            Hyper <span className="text-rose-500"> Movies</span>
            <p className=" text-xs text-center text-slate-500 font-light">
              Film Review
            </p>
          </h1>
          <ul className="hidden md:flex text-sm lg:text-base gap-6 uppercase">
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">People </a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
        <div className=" hidden md:block ml-auto uppercase">
          <ul className="flex gap-8">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a
                className="bg-rose-600 hover:bg-rose-500 px-6 py-3 rounded-3xl text-white"
                href="#"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsMenuActive(!isMenuActive)}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={` bg-slate-900 text-center overflow-hidden transition-all duration-500  text-slate-300${
          isMenuActive
            ? "h-full py-4 border-t-2 border-slate-700 "
            : " py-0  border-none "
        }`}
        style={{ height: isMenuActive ? 255 : 0 }}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#">MOVIES</a>
          </li>
          <li>
            <a href="#">TV SHOWS</a>
          </li>
          <li>
            <a href="#">PEOPLE</a>
          </li>
          <li>
            <a href="#">MORE</a>
          </li>
        </ul>
        <div className="mt-4 pt-4 flex gap-4 justify-center items-center  border-t-2 border-slate-700">
          <a href="#" className="text-xl  ">
            Login
          </a>
          <a href="#" className="bg-rose-600 rounded-xl py-2 px-4 text-white ">
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
}

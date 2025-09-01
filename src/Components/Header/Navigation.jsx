import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const menuItems = [
  {
    path: "/movies",
    text: "Movies",
  },
  {
    path: "/tv",
    text: "TV Shows",
  },
  {
    path: "/people",
    text: "People",
  },
  {
    path: "/more",
    text: "More",
  },
];

export default function Navigation() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { user, logout } = useContext(UserContext);

  function activeClass({ isActive }) {
    return isActive ? "text-yellow-200" : "hover:text-white";
  }

  return (
    <>
      <nav className="flex items-baseline text-slate-300 bg-slate-900 p-4 md:container md:bg-transparent">
        <div className="flex items-baseline">
          <Link to="/" className="text-2xl mr-12 text-white">
            Hyper <span className="text-rose-700">Movies</span>
            <p className="text-xs text-center text-slate-500 font-light">
              Film Review
            </p>
          </Link>

          <ul className="hidden md:flex text-sm lg:text-base gap-6 uppercase">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={activeClass}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block ml-auto uppercase">
          {Object.keys(user).length ? (
            <>
              <div>
                {user.name}{" "}
                <span className="text-red-700 ml-4 " onClick={logout}>
                  Logout
                </span>
              </div>
            </>
          ) : (
            <ul className="flex gap-8">
              <li>
                <NavLink
                  to="/login"
                  className="hover:text-white hover:bg-rose-600 bg-rose-500 p-2.5 px-3 rounded-xl text-black transition-all duration-300"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsMenuActive(!isMenuActive)}
            className="cursor-pointer"
            aria-label="Toggle menu"
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

      {/* Mobile Menu*/}
      <div
        className={`bg-slate-900 text-center overflow-hidden transition-all duration-500 text-slate-300 ${
          isMenuActive
            ? "h-full py-4 border-t-2 border-slate-700"
            : "py-0 border-none"
        }`}
        style={{ height: isMenuActive ? "255px" : "0" }}
      >
        <ul className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                className={activeClass}
                to={item.path}
                onClick={() => setIsMenuActive(false)}
              >
                {item.text.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-4 flex gap-4 justify-center items-center border-t-2 border-slate-700">
          <NavLink
            to="/login"
            className="hover:text-black hover:bg-rose-600 bg-rose-700 rounded-xl py-2 px-4 text-white"
          >
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
}

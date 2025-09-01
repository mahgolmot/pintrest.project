import React, { useState } from "react";

import MoviesListSlider from "../Main/MoviesListSlider";

export default function Home({ movies }) {
  const [moviesActiveTab, setMoviesActiveTab] = useState("upcoming");
  const [tvActiveTab, setTvActiveTab] = useState("popular");

  function handleChangeMoviesActiveTab(tab) {
    setMoviesActiveTab(tab);
  }
  function handleChangeTvActiveTab(tab) {
    setTvActiveTab(tab);
  }
  function activeClass(tab) {
    return tab === moviesActiveTab
      ? "text-rose-400 text-xl cursor-pointer"
      : "";
  }
  function activeTvClassName(tab) {
    return tab === tvActiveTab ? "text-rose-400 text-xl cursor-pointer" : "";
  }
  return (
    <div className="container">
      <div className="pt-8 ">
        <div className="md:flex gap-8 items-center md:mb-4 ">
          <h2 className="text-slate-300 text-2xl ">Movies</h2>
          <ul className="my-6 flex flex-col gap-4 md:gap-8 text-rose-100 md:flex-row  items-baseline [&>*]:cursor-pointer ">
            <li
              onClick={() => handleChangeMoviesActiveTab("upcoming")}
              className={activeClass("upcoming")}
            >
              Upcoming
            </li>
            <li
              onClick={() => handleChangeMoviesActiveTab("now_playing")}
              className={activeClass("now_playing")}
            >
              Now Playing
            </li>
            <li
              onClick={() => handleChangeMoviesActiveTab("popular")}
              className={activeClass("popular")}
            >
              Popular
            </li>
            <li
              onClick={() => handleChangeMoviesActiveTab("top_rated")}
              className={activeClass("top_rated")}
            >
              Top Rated
            </li>
          </ul>
        </div>
        <MoviesListSlider type="movie" activeTab={moviesActiveTab} />
      </div>
      <div className="pt-8 ">
        <div className="md:flex gap-8 items-center md:mb-4 ">
          <h2 className="text-slate-300 text-2xl ">TV - Series</h2>
          <ul className="my-6 flex flex-col gap-4 md:gap-8 text-rose-100 md:flex-row items-baseline [&>*]:cursor-pointer  ">
            <li
              onClick={() => handleChangeTvActiveTab("popular")}
              className={activeTvClassName("popular")}
            >
              Popular
            </li>
            <li
              onClick={() => handleChangeTvActiveTab("top_rated")}
              className={activeTvClassName("top_rated")}
            >
              Top Rated
            </li>
            <li
              onClick={() => handleChangeTvActiveTab("airing_today")}
              className={activeTvClassName("airing_today")}
            >
              Airing Today
            </li>
            <li
              onClick={() => handleChangeTvActiveTab("on_the_air")}
              className={activeTvClassName("on_the_air")}
            >
              On The Air
            </li>
          </ul>
        </div>
        <MoviesListSlider type="tv" activeTab={tvActiveTab} />
      </div>
    </div>
  );
}

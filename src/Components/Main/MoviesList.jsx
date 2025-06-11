import React from "react";
import MovieCard from "../Movies/MovieCard";
import img1 from "../../Media/movie1.jpg";
import img2 from "../../Media/movie2.jpg";
import img3 from "../../Media/movie3.jpg";
import img4 from "../../Media/movie4.jpg";
import img5 from "../../Media/movie5.jpg";
import img6 from "../../Media/movie6.jpg";
import img7 from "../../Media/movie7.jpg";
import MoviesListSlider from "./MoviesListSlider";
const movies = [
  { img: img1, mName: "Race to Witch Mountain", mRate: "5.7 / 10" },
  { img: img2, mName: "Clown in a Cornfield", mRate: "6.1 / 10" },
  { img: img3, mName: "Rogue Agent", mRate: "6.5 / 10" },
  {
    img: img4,
    mName: "K.O.",
    mRate: "5.8 / 10",
  },
  {
    img: img5,
    mName: "Straw ",
    mRate: "5 / 10",
  },
  {
    img: img6,
    mName: "A Minecraft Movie",
    mRate: "5.8 / 10",
  },
  {
    img: img7,
    mName: "A Working Man ",
    mRate: "5.7 / 10",
  },
];
export default function MoviesList() {
  return (
    <div className="container">
      <div className="pt-8 ">
        <div className="md:flex gap-8 items-center md:mb-4 ">
          <h2 className="text-slate-300 text-2xl ">What's Popular</h2>
          <ul className="my-6 flex flex-col gap-4 md:gap-8 text-rose-400 md:flex-row  ">
            <li>Streaming</li>
            <li>On TV</li>
            <li>For Rent </li>
            <li>In Theaters</li>
          </ul>
        </div>
        <MoviesListSlider movies={movies} />
      </div>
      <div className="pt-8 ">
        <div className="md:flex gap-8 items-center md:mb-4 ">
          <h2 className="text-slate-300 text-2xl ">Free to Watch</h2>
          <ul className="my-6 flex flex-col gap-4 md:gap-8 text-rose-400 md:flex-row  ">
            <li>Movie</li>
            <li>TV</li>
          </ul>
        </div>
        <MoviesListSlider movies={movies} />
      </div>
    </div>
  );
}

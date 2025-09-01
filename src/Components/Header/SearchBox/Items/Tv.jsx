import React from "react";
import { imgUrl } from "../../../../Helpers/imgUrl";
import { Link } from "react-router-dom";

export default function Tv({ item }) {
  return (
    <Link to={`/tv/${item.id}`}>
      <div className="flex gap-3 items-center text-lg ">
        <img
          className="w-11 h-11 rounded-md object-cover"
          src={
            item.poster_path
              ? imgUrl(item.profile_path, "w92")
              : "/public/defaultMovie.jpg"
          }
          alt=""
        />
        <p>{item.name}</p>
      </div>
    </Link>
  );
}

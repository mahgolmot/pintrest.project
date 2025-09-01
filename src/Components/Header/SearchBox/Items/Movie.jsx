import React from "react";
import { imgUrl } from "../../../../Helpers/imgUrl";
import { Link } from "react-router-dom";

export default function Movie({ item }) {
  return (
    <Link to={`/movies/${item.id}`}>
      <div className="flex gap-3 items-center text-lg ">
        <img
          className="w-11 h-11 rounded-md object-cover"
          src={
            item.profile_path
              ? imgUrl(item.profile_path, "w45")
              : "/public/defaultMovie.jpg"
          }
          alt=""
        />
        <p>{item.title}</p>
      </div>
    </Link>
  );
}

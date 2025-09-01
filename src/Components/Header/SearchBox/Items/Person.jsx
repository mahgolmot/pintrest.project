import React from "react";
import { imgUrl } from "../../../../Helpers/imgUrl";
import { Link } from "react-router-dom";

export default function Person({ item }) {
  return (
    <Link to={`/people/>${item.id}`}>
      <div className="flex gap-3 items-center text-lg ">
        <img
          className="w-11 h-11 rounded-md object-cover"
          src={
            item.profile_path
              ? imgUrl(item.profile_path, "w45")
              : "/public/defaultProfile.webp"
          }
          alt=""
        />
        <p>{item.name}</p>
      </div>
    </Link>
  );
}

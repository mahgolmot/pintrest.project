import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export default function ProfileMenu() {
  const { user, session } = useContext(UserContext);
  return (
    <div className="bg-pink-200 text-black border-t-2 border-b-2  border-pink-950">
      <ul className="flex justify-center gap-10 pt-4 pb-3">
        <li>
          <a href="">Overview</a>
        </li>
        <li>
          <a href="">Discussions</a>
        </li>
        <li>
          <a href="">Lists</a>
        </li>
        <li>
          <a href="">Ratings</a>
        </li>
        <li>
          <a href="">Watchlist</a>
        </li>
      </ul>
    </div>
  );
}

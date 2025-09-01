import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import { imgUrl } from "../../Helpers/imgUrl";
import img1 from "../../assets/images/9695215.jpg";

export default function Profile() {
  const { user, session } = useContext(UserContext);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (!session) {
  //       navigate("/login", { replace: true });
  //     }
  //   }, [session]);
  return session ? (
    <div>
      <img src={img1} className=" relative w-full h-80" alt="" />
      <div className="absolute top-40 left-96 text-3xl  font-extrabold ">
        <h1>{user.name}</h1>
      </div>
      <img
        src={imgUrl(user?.avatar?.tmdb?.avatar_path, "w185")}
        className="absolute top-36 left-12 h-64"
        alt=""
      />
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}

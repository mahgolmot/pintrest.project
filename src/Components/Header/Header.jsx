// import React from "react";
// import Navigation from "./Navigation";
// import SearchBox from "./SearchBox";
// import FollowUs from "./FollowUs";
// import HeaderSlider from "./HeaderSlider";
// export default function Header() {
//   return (
//     <header
//       className="py-12  bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `  linear-gradient(to bottom, rgb(0 0 0 / 80%) , rgb(0 0 0 / 40%),rgb( 0 0 0 / 70%)),  url('cinema.jpg')`,
//       }}
//     >
//       <div className="container">
//         <Navigation />
//         <SearchBox />
//         <FollowUs />
//         <HeaderSlider />
//       </div>
//     </header>
//   );
// }

import React, { useState } from "react";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
import defaultBg from "../../assets/images/cinema.jpg";

export default function Header() {
  const [backgroundImage, setBackgroundImage] = useState(defaultBg);

  const handleSlideHover = (imgSrc) => {
    setBackgroundImage(imgSrc || defaultBg);
  };

  return (
    <header
      className=" relative bg-cover  bg-no-repeat transition-all duration-1000 pb-8  md:py-8"
      style={{
        backgroundImage: ` linear-gradient(to bottom,rgb(30 41 59 /100%),rgb(30 41 59 /50%),rgb(30 41 59 /20%)), url(${backgroundImage})`,
      }}
    >
      <Navigation />
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="container relative z-10  ">
        <SearchBox />
        <FollowUs />
        <HeaderSlider onSlideHover={handleSlideHover} />
      </div>
    </header>
  );
}

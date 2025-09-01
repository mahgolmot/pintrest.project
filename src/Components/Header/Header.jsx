// import React, { useState } from "react";
// import Navigation from "./Navigation";
// import SearchBox from "./SearchBox/SearchBox";
// import FollowUs from "./FollowUs";
// import HeaderSlider from "./HeaderSlider";
// import defaultBg from "../../assets/images/cinema.jpg";
// import { useLocation } from "react-router-dom";

// export default function Header() {
//   const location = useLocation();
//   const [backgroundImage, setBackgroundImage] = useState(defaultBg);

//   const handleSlideHover = (imgSrc) => {
//     // setBackgroundImage(imgSrc || defaultBg);
//     if (imgSrc) {
//       setBackgroundImage(imgSrc);
//     } else {
//       setBackgroundImage(defaultBg);
//     }
//   };
//   function Header({ isProfilePage = false }) {
//     if (isProfilePage) {
//       return (
//         <header className="profile-header">
//           {/* فقط منوی بالا */}
//           <nav className="profile-nav">
//             {/* محتوای منوی مورد نظر برای پروفایل */}
//             <ul>
//               <li>منوی ۱</li>
//               <li>منوی ۲</li>
//               <li>منوی ۳</li>
//             </ul>
//           </nav>
//         </header>
//       );
//     }
//   }
//   return (
//     <header
//       className={`relative bg-cover  bg-no-repeat transition-all duration-1000 pb-8  md:py-8  ${
//         location.pathname !== "/" ? " h-[600px]" : " "
//       }`}
//       style={{
//         backgroundImage: ` linear-gradient(to bottom,rgb(30 41 59 /100%),rgb(30 41 59 /60%),rgb(30 41 59 /30%)), url(${backgroundImage})`,
//       }}
//     >
//       <Navigation />
//       {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
//       <div className="container relative z-10  ">
//         <SearchBox />
//         <div className={`${location.pathname !== "/" ? " hidden " : ""}`}>
//           <FollowUs />
//           {/* <HeaderSlider onSlideHover={handleSlideHover} />
//            */}
//           <HeaderSlider
//             onSlideHover={handleSlideHover}
//             defaultBackground={defaultBg}
//           />
//         </div>
//       </div>
//     </header>
//   );
// }

import React, { useState } from "react";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox/SearchBox";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
import defaultBg from "../../assets/images/cinema.jpg";
import { useLocation } from "react-router-dom";

export default function Header({ isProfilePage = false }) {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState(defaultBg);

  const handleSlideHover = (imgSrc) => {
    if (imgSrc) {
      setBackgroundImage(imgSrc);
    } else {
      setBackgroundImage(defaultBg);
    }
  };

  if (isProfilePage) {
    return (
      <header className="bg-slate-800 py-4">
        <div className="container mx-auto">
          <Navigation />
        </div>
      </header>
    );
  }

  return (
    <header
      className={`relative bg-cover bg-no-repeat transition-all duration-1000 pb-8 md:py-8 ${
        location.pathname !== "/" ? "h-[600px]" : ""
      }`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(30 41 59 /100%), rgb(30 41 59 /60%), rgb(30 41 59 /30%)), url(${backgroundImage})`,
      }}
    >
      <Navigation />
      <div className="container relative z-10">
        <SearchBox />
        <div className={`${location.pathname !== "/" ? "hidden" : ""}`}>
          <FollowUs />
          <HeaderSlider
            onSlideHover={handleSlideHover}
            defaultBackground={defaultBg}
          />
        </div>
      </div>
    </header>
  );
}

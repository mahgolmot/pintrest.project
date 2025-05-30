// import { Swiper, SwiperSlide } from "swiper/react";
// import img1 from "../../Media/slide1.avif";
// import img2 from "../../Media/slide2.avif";
// import img3 from "../../Media/slide3.avif";
// import img4 from "../../Media/slide4.avif";
// import img5 from "../../Media/slide5.avif";
// import img6 from "../../Media/slide6.avif";

// import { Autoplay } from "swiper/modules";

// export default function HeaderSlider() {
//   return (
//     <div className="mt-8">
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={20}
//         slidesPerView={5}
//         autoplay={{ delay: 2000 }}
//         loop
//       >
//         <SwiperSlide>
//           <img className="w-full" src={img1} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="w-full" src={img2} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="w-full" src={img3} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="w-full" src={img4} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="w-full" src={img5} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="w-full" src={img6} alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../Media/slide1.avif";
import img11 from "../../Media/slide1-1.avif";
import img2 from "../../Media/slide2.avif";
import img22 from "../../Media/slide2-1.jpg";
import img3 from "../../Media/slide3.avif";
import img33 from "../../Media/slide3-1.jpg";
import img4 from "../../Media/slide4.avif";
import img44 from "../../Media/slide4-1jpg.jpg";
import img5 from "../../Media/slide5.avif";
import img55 from "../../Media/slide5-1.jpg";
import img6 from "../../Media/slide6.avif";
import img66 from "../../Media/slide6-1.jpg";
import { Autoplay } from "swiper/modules";

export default function HeaderSlider({ onSlideHover }) {
  const [activeSlide, setActiveSlide] = useState(null);

  const handleSlideHover = (imgSrc) => {
    setActiveSlide(imgSrc);
    onSlideHover(imgSrc); // این تابع به کامپوننت والد پاس داده می‌شود
  };

  const handleSlideLeave = () => {
    setActiveSlide(null);
    onSlideHover(null); // بازگشت به پس‌زمینه پیش‌فرض
  };

  return (
    <div className="mt-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{ delay: 2000 }}
        loop
      >
        <SwiperSlide>
          <img
            className="w-full cursor-pointer"
            src={img1}
            alt=""
            onMouseEnter={() => handleSlideHover(img11)}
            onMouseLeave={handleSlideLeave}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full cursor-pointer"
            src={img2}
            alt=""
            onMouseEnter={() => handleSlideHover(img22)}
            onMouseLeave={handleSlideLeave}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full cursor-pointer"
            src={img3}
            alt=""
            onMouseEnter={() => handleSlideHover(img33)}
            onMouseLeave={handleSlideLeave}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full cursor-pointer"
            src={img4}
            alt=""
            onMouseEnter={() => handleSlideHover(img44)}
            onMouseLeave={handleSlideLeave}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full cursor-pointer"
            src={img5}
            alt=""
            onMouseEnter={() => handleSlideHover(img55)}
            onMouseLeave={handleSlideLeave}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full cursor-pointer"
            src={img6}
            alt=""
            onMouseEnter={() => handleSlideHover(img66)}
            onMouseLeave={handleSlideLeave}
          />
        </SwiperSlide>
        {/* بقیه اسلایدها به همین شکل */}
      </Swiper>
    </div>
  );
}

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

const movieData = [
  {
    Id: 1,
    img: img1,
    imgHover: img11,
    title: "Z Nation",
    rate: "6.7 / 10",
  },
  {
    Id: 2,
    img: img2,
    imgHover: img22,
    title: "Burb Patrol",
    rate: "6 / 10",
  },
  {
    Id: 3,
    img: img3,
    imgHover: img33,
    title: "Wise Guy",
    rate: "8.2 / 10",
  },
  {
    Id: 4,
    img: img4,
    imgHover: img44,
    title: "Ghost Show",
    rate: "7.1 / 10",
  },
  {
    Id: 5,
    img: img5,
    imgHover: img55,
    title: "HighWay To Heaven",
    rate: "6.9 / 10",
  },
  {
    Id: 6,
    img: img6,
    imgHover: img66,
    title: "The Dresden Files",
    rate: "7.6 / 10",
  },
];
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
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        loop
      >
        {movieData.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className="w-full cursor-pointer relative bg-center bg-cover h-full  object-cover sm:object-center md:object-left  "
                src={elem.img}
                alt=""
                onMouseEnter={() => handleSlideHover(elem.imgHover)}
                onMouseLeave={handleSlideLeave}
              />
              <div className="absolute bottom-0 text-nowrap left-0 p-8 flex flex-col  justify-end">
                <h1 className=" text-xl">{elem.title}</h1>
                <div className="flex mt-2 gap-2 ">
                  <span className="text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </span>
                  <span>{elem.rate}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
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
        */}
      </Swiper>
    </div>
  );
}

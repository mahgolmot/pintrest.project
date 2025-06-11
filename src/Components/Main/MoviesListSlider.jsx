import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MovieCard from "../Movies/MovieCard";

export default function MoviesListSlider({ movies }) {
  return (
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
          slidesPerView: 6,
          spaceBetween: 40,
        },
      }}
      modules={[Autoplay]}
      autoplay={{ delay: 2000 }}
      loop
    >
      {movies.map((movie, index) => {
        return (
          <SwiperSlide key={index}>
            <MovieCard
              img={movie.img}
              mName={movie.mName}
              mRate={movie.mRate}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

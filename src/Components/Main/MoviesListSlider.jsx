import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MovieCard from "../Movies/MovieCard";
import { useEffect, useState } from "react";
import { fench } from "../../Services/fench";

export default function MoviesListSlider({ type, activeTab }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await fench(`${type}/${activeTab}`);
      setMovies(data.results);
    })();
  }, [type, activeTab]);
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
      // loop
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            // img={movie.img}
            // mName={movie.mName}
            // mRate={movie.mRate}

            movie={movie}
            type={type}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import MovieCard from "../Movies/MovieCard";

// export default function MoviesListSlider({ movies = [] }) {
//   // خطایابی پیشرفته
//   if (!Array.isArray(movies)) {
//     console.error("movies prop is not an array:", movies);
//     return <div className="text-red-500 p-4">Invalid movies data</div>;
//   }

//   return (
//     <div className="relative">
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{
//           delay: 2000,
//           pauseOnMouseEnter: true,
//           disableOnInteraction: false,
//         }}
//         // loop={true}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           640: { slidesPerView: 2, spaceBetween: 10 },
//           768: { slidesPerView: 3, spaceBetween: 20 },
//           1024: { slidesPerView: 5, spaceBetween: 30 },
//         }}
//         observer={true}
//         observeParents={true}
//       >
//         {movies.map((movie) => (
//           <SwiperSlide key={movie.id || movie.imdbId || Math.random()}>
//             <MovieCard
//               img={movie.poster_path || movie.img}
//               mName={movie.title || movie.mName}
//               mRate={movie.vote_average || movie.mRate}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

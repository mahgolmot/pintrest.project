import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Rating from "@mui/material/Rating";
import { UserContext } from "../../Context/UserContext";
import { imgUrl } from "../../Helpers/imgUrl";
import toast from "react-hot-toast";
import { fench } from "../../Services/fench";

const apiKey = "2a9f4fc8e17d91a78ef7e3da5347ffde";
const baseUrl = "https://api.themoviedb.org/3";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const { user, session, favoriteMovies, fetchFavoriteMovies } =
    useContext(UserContext);

  useEffect(() => {
    if (movie && favoriteMovies.length) {
      const favMovie = favoriteMovies.find((f) => f.id === movie?.id);

      setIsFavorite(Boolean(favMovie));
    }
  }, [movie, favoriteMovies]);

  async function handleAddToFavorite() {
    if (session) {
      await axios.post(
        `${baseUrl}/account/${user.id}/favorite?api_key=${apiKey}&session_id=${session}`,
        {
          media_type: "movie",
          media_id: movie.id,
          favorite: !isFavorite,
        }
      );
      fetchFavoriteMovies();
      toast.success(
        `${movie.title} ${isFavorite ? "removed" : "added"}  to your favorite`
      );
    } else {
      toast.error("Please login to add to favorite");
    }
  }

  async function loadMovie() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${baseUrl}/movie/${id}?api_key=${apiKey}`
      );
      setMovie(data);
    } catch (error) {
      console.error("Error loading movie:", error);
    } finally {
      setLoading(false);
    }
  }
  async function ratingChanged(rate) {
    fench.post(`movie/${movie.id}/rating`, { value: rate * 2 });
    toast.success(`yout vote is success`);
  }

  useEffect(() => {
    loadMovie();
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (!movie) return <div className="text-center py-8">Movie not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
        <div className="md:col-span-1   ">
          {movie.poster_path ? (
            <img
              src={imgUrl(movie.poster_path, "w500")}
              alt={movie.title}
              className="w-full h-auto rounded-lg shadow-lg"
              onError={(e) => {
                e.target.src = "/placeholder-movie.png";
              }}
            />
          ) : (
            <div className="bg-gray-800 rounded-lg w-full h-[450px] flex items-center justify-center">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
        </div>

        <div className="md:col-span-3">
          <div className="flex flex-wrap gap-3 items-center  mb-4">
            <h1 className="text-3xl font-bold text-white">{movie.title}</h1>
            <time className="text-slate-400">
              ({movie.release_date?.split("-")[0]})
            </time>
          </div>
          <div className="flex gap-8 mt-8 text-yellow-400">
            <button
              className="flex items-center gap-2"
              onClick={handleAddToFavorite}
            >
              <p className="  border border-yellow-300 w-9 h-9 rounded-full flex justify-center items-center">
                {isFavorite ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                )}
              </p>{" "}
              <span>
                {isFavorite ? "Remove from favorite" : "Add to favorite"}
              </span>
            </button>
            <button className="flex items-center gap-2">
              <p className="  border border-yellow-300 w-9 h-9 rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                </svg>
              </p>
              <span>Share</span>
            </button>
          </div>
          <div className="grid grid-cols-4 border-slate-500 border-t-2 border-b-2 mt-8">
            <div className="col-span-1 border-r-2 py-2 text-slate-300">
              <div className="flex items-center gap-4">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-yellow-500"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div>{parseInt(movie.vote_average)}/10</div>
                  <div>{movie.vote_count} reviews</div>
                </div>
              </div>
            </div>
            <div
              className="col-span-3 pl-4 flex gap-4 items-center
            
            
            "
            >
              <p>Rate this movie</p>
              <Rating
                precision={0.5}
                onChange={(event, newValue) => ratingChanged(newValue)}
                size="medium"
                sx={{ color: "#ffd700" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

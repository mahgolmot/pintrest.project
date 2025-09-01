import axios from "axios";
const session_id = localStorage.getItem("session");

export const fench = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "2a9f4fc8e17d91a78ef7e3da5347ffde",
    ...(session_id && { session_id }),
  },
});

window.fench = fench;

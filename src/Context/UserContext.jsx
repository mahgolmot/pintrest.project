import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { replace, useLocation, useNavigate } from "react-router-dom";
import { fench } from "../Services/fench";

export const UserContext = createContext({ user: {}, session: "" });

const apiKey = "2a9f4fc8e17d91a78ef7e3da5347ffde";
const baseUrl = "https://api.themoviedb.org/3";

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [favoriteMovies, setFavoritMovies] = useState([]);
  const [session, setSession] = useState(() => localStorage.getItem("session"));
  const location = useLocation();

  async function getUserData() {
    const { data } = await axios.get(
      `${baseUrl}/account?api_key=${apiKey}&session_id=${session}`
    );
    fetchFavoriteMovies(data.id);

    setUser(data);
  }
  async function fetchFavoriteMovies(id = user.id) {
    const favResult = await fench.get(`account/${id}/favorite/movies`);
    setFavoritMovies(favResult.data.results);
  }
  useEffect(() => {
    if (session) {
      localStorage.setItem("session", session);
      getUserData();

      if (location.pathname == "/login") {
        navigate("/profile", replace);
      }
    }
  }, [session]);

  function logout() {
    setUser({});
    setSession(null);
    localStorage.clear();
  }

  async function login(username, password) {
    try {
      const tokenResult = await axios.get(
        `${baseUrl}/authentication/token/new?api_key=${apiKey}`
      );

      const authorize = await axios.post(
        `${baseUrl}/authentication/token/validate_with_login?api_key=${apiKey}`,
        {
          username,
          password,
          request_token: tokenResult.data.request_token,
        }
      );

      const session = await axios.post(
        `${baseUrl}/authentication/session/new?api_key=${apiKey}`,
        {
          request_token: tokenResult.data.request_token,
        }
      );

      setSession(session.data.session_id);
    } catch {
      toast.error("Error in login");
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        session,
        logout,
        favoriteMovies,
        fetchFavoriteMovies,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

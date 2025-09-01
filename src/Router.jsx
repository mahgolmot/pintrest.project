import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/Pages/Home";
import Movies from "./Components/Pages/Movies";
import Movie from "./Components/Pages/Movie";
import Login from "./Components/Pages/Login";
import UserProvider from "./Context/UserContext";
import Profile from "./Components/Pages/Profile";

export const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
      {
        path: "/tv",
        element: <h1>this is tv pages</h1>,
      },
      {
        path: "/people",
        element: <h1>this is person pages</h1>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

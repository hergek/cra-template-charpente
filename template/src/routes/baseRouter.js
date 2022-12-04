import Login from "../pages/auth/Login.jsx";
import Home from "../pages/dashbord/Home.jsx";
import NotFound from "../pages/out/NotFound.jsx";

export const routes = [
  {
    path: "/",
    El: Home,
  },
  {
    path: "/login",
    El: Login,
  },
  {
    path: "*",
    El: NotFound,
  },
];

export const publicRoutes = ["/login", "*"];

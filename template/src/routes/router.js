import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login.jsx";
import Home from "../pages/dashbord/Home.jsx";
import NotFound from "../pages/out/NotFound.jsx";
import Secured from "./Secured.jsx";

const privateRoutes = [
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

const publicRoutes = ["/login", "*"];

const Router = () => {
  return (
    <>
      <Routes>
        {privateRoutes.map(({ path, El }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={null}>
                {publicRoutes.includes(path) ? (
                  <El />
                ) : (
                  <Secured>
                    <El />
                  </Secured>
                )}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </>
  );
};

export default Router;

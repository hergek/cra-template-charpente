import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, routes } from "./baseRouter.js";
import ProtectedRoutes from "./protectedRoutes.js";

const Router = () => {
  return (
    <>
      <Routes>
        {routes.map(({ path, El }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={null}>
                {publicRoutes.includes(path) ? (
                  <El />
                ) : (
                  <ProtectedRoutes>
                    <El />
                  </ProtectedRoutes>
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
